from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PublisherReviewStatusStatusEnum(str, Enum):
    REVIEW_STATUS_UNSPECIFIED = "REVIEW_STATUS_UNSPECIFIED"
    REVIEW_STATUS_APPROVED = "REVIEW_STATUS_APPROVED"
    REVIEW_STATUS_REJECTED = "REVIEW_STATUS_REJECTED"
    REVIEW_STATUS_PENDING = "REVIEW_STATUS_PENDING"


@dataclass_json
@dataclass
class PublisherReviewStatus:
    publisher_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisherName' }})
    status: Optional[PublisherReviewStatusStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
