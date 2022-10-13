from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import exchangereviewstatus
from . import publisherreviewstatus

class ReviewStatusInfoApprovalStatusEnum(str, Enum):
    APPROVAL_STATUS_UNSPECIFIED = "APPROVAL_STATUS_UNSPECIFIED"
    APPROVAL_STATUS_PENDING_NOT_SERVABLE = "APPROVAL_STATUS_PENDING_NOT_SERVABLE"
    APPROVAL_STATUS_PENDING_SERVABLE = "APPROVAL_STATUS_PENDING_SERVABLE"
    APPROVAL_STATUS_APPROVED_SERVABLE = "APPROVAL_STATUS_APPROVED_SERVABLE"
    APPROVAL_STATUS_REJECTED_NOT_SERVABLE = "APPROVAL_STATUS_REJECTED_NOT_SERVABLE"

class ReviewStatusInfoContentAndPolicyReviewStatusEnum(str, Enum):
    REVIEW_STATUS_UNSPECIFIED = "REVIEW_STATUS_UNSPECIFIED"
    REVIEW_STATUS_APPROVED = "REVIEW_STATUS_APPROVED"
    REVIEW_STATUS_REJECTED = "REVIEW_STATUS_REJECTED"
    REVIEW_STATUS_PENDING = "REVIEW_STATUS_PENDING"

class ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum(str, Enum):
    REVIEW_STATUS_UNSPECIFIED = "REVIEW_STATUS_UNSPECIFIED"
    REVIEW_STATUS_APPROVED = "REVIEW_STATUS_APPROVED"
    REVIEW_STATUS_REJECTED = "REVIEW_STATUS_REJECTED"
    REVIEW_STATUS_PENDING = "REVIEW_STATUS_PENDING"


@dataclass_json
@dataclass
class ReviewStatusInfo:
    approval_status: Optional[ReviewStatusInfoApprovalStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalStatus' }})
    content_and_policy_review_status: Optional[ReviewStatusInfoContentAndPolicyReviewStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentAndPolicyReviewStatus' }})
    creative_and_landing_page_review_status: Optional[ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeAndLandingPageReviewStatus' }})
    exchange_review_statuses: Optional[List[exchangereviewstatus.ExchangeReviewStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exchangeReviewStatuses' }})
    publisher_review_statuses: Optional[List[publisherreviewstatus.PublisherReviewStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisherReviewStatuses' }})
    
