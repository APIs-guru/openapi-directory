from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class ConsentAcknowledgementStatusEnum(str, Enum):
    OK = "OK"
    UNKNOWN = "UNKNOWN"


@dataclass_json
@dataclass
class ConsentAcknowledgement:
    consent_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentId' }})
    status: ConsentAcknowledgementStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
