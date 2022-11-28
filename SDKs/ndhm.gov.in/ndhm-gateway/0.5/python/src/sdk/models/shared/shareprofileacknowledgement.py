from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ShareProfileAcknowledgementStatusEnum(str, Enum):
    SUCCESS = "SUCCESS"
    FAILURE = "FAILURE"


@dataclass_json
@dataclass
class ShareProfileAcknowledgement:
    health_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthId') }})
    status: ShareProfileAcknowledgementStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
