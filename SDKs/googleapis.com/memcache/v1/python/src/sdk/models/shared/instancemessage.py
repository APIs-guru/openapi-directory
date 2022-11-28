from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class InstanceMessageCodeEnum(str, Enum):
    CODE_UNSPECIFIED = "CODE_UNSPECIFIED"
    ZONE_DISTRIBUTION_UNBALANCED = "ZONE_DISTRIBUTION_UNBALANCED"


@dataclass_json
@dataclass
class InstanceMessage:
    code: Optional[InstanceMessageCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
