from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ErrorDetail:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    context: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    in_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in') }})
    sub_category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subCategory') }})
    
