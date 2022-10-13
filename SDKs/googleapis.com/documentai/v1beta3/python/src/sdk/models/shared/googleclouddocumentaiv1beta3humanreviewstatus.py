from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDocumentaiV1beta3HumanReviewStatusStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    SKIPPED = "SKIPPED"
    VALIDATION_PASSED = "VALIDATION_PASSED"
    IN_PROGRESS = "IN_PROGRESS"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3HumanReviewStatus:
    human_review_operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'humanReviewOperation' }})
    state: Optional[GoogleCloudDocumentaiV1beta3HumanReviewStatusStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    state_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateMessage' }})
    
