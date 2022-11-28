from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDocumentaiV1beta3HumanReviewStatusStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    SKIPPED = "SKIPPED"
    VALIDATION_PASSED = "VALIDATION_PASSED"
    IN_PROGRESS = "IN_PROGRESS"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3HumanReviewStatus:
    r"""GoogleCloudDocumentaiV1beta3HumanReviewStatus
    The status of human review on a processed document.
    """
    
    human_review_operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('humanReviewOperation') }})
    state: Optional[GoogleCloudDocumentaiV1beta3HumanReviewStatusStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateMessage') }})
    
