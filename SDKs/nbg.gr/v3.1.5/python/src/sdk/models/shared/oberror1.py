from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObError1:
    error_code: ErrorCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorCode') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Path') }})
    
