from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MetaCommunicationMediumEnum(str, Enum):
    MOBILE = "MOBILE"
    EMAIL = "EMAIL"


@dataclass_json
@dataclass
class Meta:
    communication_expiry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('communicationExpiry') }})
    communication_hint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('communicationHint') }})
    communication_medium: Optional[MetaCommunicationMediumEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('communicationMedium') }})
    
