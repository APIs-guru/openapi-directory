from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ConsentAcknowledgementStatusEnum(str, Enum):
    OK = "OK"
    UNKNOWN = "UNKNOWN"


@dataclass_json
@dataclass
class ConsentAcknowledgement:
    consent_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentId') }})
    status: ConsentAcknowledgementStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
