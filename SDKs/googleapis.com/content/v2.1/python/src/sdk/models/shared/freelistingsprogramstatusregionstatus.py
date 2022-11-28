from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class FreeListingsProgramStatusRegionStatusEligibilityStatusEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    APPROVED = "APPROVED"
    DISAPPROVED = "DISAPPROVED"
    WARNING = "WARNING"
    UNDER_REVIEW = "UNDER_REVIEW"
    PENDING_REVIEW = "PENDING_REVIEW"
    ONBOARDING = "ONBOARDING"

class FreeListingsProgramStatusRegionStatusReviewEligibilityStatusEnum(str, Enum):
    REVIEW_ELIGIBILITY_UNSPECIFIED = "REVIEW_ELIGIBILITY_UNSPECIFIED"
    ELIGIBLE = "ELIGIBLE"
    INELIGIBLE = "INELIGIBLE"

class FreeListingsProgramStatusRegionStatusReviewIneligibilityReasonEnum(str, Enum):
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
class FreeListingsProgramStatusRegionStatus:
    r"""FreeListingsProgramStatusRegionStatus
    Status of program and region.
    """
    
    disapproval_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disapprovalDate') }})
    eligibility_status: Optional[FreeListingsProgramStatusRegionStatusEligibilityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eligibilityStatus') }})
    onboarding_issues: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onboardingIssues') }})
    region_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCodes') }})
    review_eligibility_status: Optional[FreeListingsProgramStatusRegionStatusReviewEligibilityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewEligibilityStatus') }})
    review_ineligibility_reason: Optional[FreeListingsProgramStatusRegionStatusReviewIneligibilityReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewIneligibilityReason') }})
    review_ineligibility_reason_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewIneligibilityReasonDescription') }})
    review_ineligibility_reason_details: Optional[FreeListingsProgramStatusReviewIneligibilityReasonDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewIneligibilityReasonDetails') }})
    review_issues: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewIssues') }})
    
