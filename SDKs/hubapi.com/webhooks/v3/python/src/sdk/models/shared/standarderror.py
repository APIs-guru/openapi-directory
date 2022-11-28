from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StandardError:
    category: ErrorCategory = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    context: dict[str, List[str]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    errors: List[ErrorDetail] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    links: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    status: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    sub_category: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subCategory') }})
    
