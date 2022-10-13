from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import shoppingadsprogramstatusreviewineligibilityreasondetails

class ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    APPROVED = "APPROVED"
    DISAPPROVED = "DISAPPROVED"
    WARNING = "WARNING"
    UNDER_REVIEW = "UNDER_REVIEW"
    PENDING_REVIEW = "PENDING_REVIEW"
    ONBOARDING = "ONBOARDING"

class ShoppingAdsProgramStatusRegionStatusReviewEligibilityStatusEnum(str, Enum):
    REVIEW_ELIGIBILITY_UNSPECIFIED = "REVIEW_ELIGIBILITY_UNSPECIFIED"
    ELIGIBLE = "ELIGIBLE"
    INELIGIBLE = "INELIGIBLE"

class ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum(str, Enum):
    REVIEW_INELIGIBILITY_REASON_UNSPECIFIED = "REVIEW_INELIGIBILITY_REASON_UNSPECIFIED"
    ONBOARDING_ISSUES = "ONBOARDING_ISSUES"
    NOT_ENOUGH_OFFERS = "NOT_ENOUGH_OFFERS"
    IN_COOLDOWN_PERIOD = "IN_COOLDOWN_PERIOD"
    ALREADY_UNDER_REVIEW = "ALREADY_UNDER_REVIEW"
    NO_REVIEW_REQUIRED = "NO_REVIEW_REQUIRED"
    WILL_BE_REVIEWED_AUTOMATICALLY = "WILL_BE_REVIEWED_AUTOMATICALLY"
    IS_RETIRED = "IS_RETIRED"
    ALREADY_REVIEWED = "ALREADY_REVIEWED"


@dataclass_json
@dataclass
class ShoppingAdsProgramStatusRegionStatus:
    disapproval_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disapprovalDate' }})
    eligibility_status: Optional[ShoppingAdsProgramStatusRegionStatusEligibilityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eligibilityStatus' }})
    onboarding_issues: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onboardingIssues' }})
    region_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionCodes' }})
    review_eligibility_status: Optional[ShoppingAdsProgramStatusRegionStatusReviewEligibilityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewEligibilityStatus' }})
    review_ineligibility_reason: Optional[ShoppingAdsProgramStatusRegionStatusReviewIneligibilityReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewIneligibilityReason' }})
    review_ineligibility_reason_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewIneligibilityReasonDescription' }})
    review_ineligibility_reason_details: Optional[shoppingadsprogramstatusreviewineligibilityreasondetails.ShoppingAdsProgramStatusReviewIneligibilityReasonDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewIneligibilityReasonDetails' }})
    review_issues: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewIssues' }})
    
