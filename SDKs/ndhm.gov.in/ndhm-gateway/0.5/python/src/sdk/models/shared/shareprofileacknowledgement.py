from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class ShareProfileAcknowledgementStatusEnum(str, Enum):
    SUCCESS = "SUCCESS"
    FAILURE = "FAILURE"


@dataclass_json
@dataclass
class ShareProfileAcknowledgement:
    health_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthId' }})
    status: ShareProfileAcknowledgementStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
