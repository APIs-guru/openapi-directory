from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ErrorModelStatusEnum(str, Enum):
    ERROR = "error"


@dataclass_json
@dataclass
class ErrorModel:
    api: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api') }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    status: Optional[ErrorModelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
