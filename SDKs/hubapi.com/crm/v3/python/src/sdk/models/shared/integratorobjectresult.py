from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IntegratorObjectResult:
    actions: List[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    tokens: List[ObjectToken] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokens') }})
    link_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkUrl') }})
    
