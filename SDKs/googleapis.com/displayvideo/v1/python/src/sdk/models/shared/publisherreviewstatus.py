from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PublisherReviewStatusStatusEnum(str, Enum):
    REVIEW_STATUS_UNSPECIFIED = "REVIEW_STATUS_UNSPECIFIED"
    REVIEW_STATUS_APPROVED = "REVIEW_STATUS_APPROVED"
    REVIEW_STATUS_REJECTED = "REVIEW_STATUS_REJECTED"
    REVIEW_STATUS_PENDING = "REVIEW_STATUS_PENDING"


@dataclass_json
@dataclass
class PublisherReviewStatus:
    r"""PublisherReviewStatus
    Publisher review status for the creative.
    """
    
    publisher_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherName') }})
    status: Optional[PublisherReviewStatusStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
