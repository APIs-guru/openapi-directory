from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CodereviewLanguagesStatusEnum(str, Enum):
    PENDING = "pending"
    FAILURE = "failure"
    SUCCESS = "success"


@dataclass_json
@dataclass
class CodereviewLanguages:
    alerts: Optional[List[CodereviewAlerts]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alerts') }})
    fixed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixed') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    new: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new') }})
    status: Optional[CodereviewLanguagesStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status-message') }})
    
