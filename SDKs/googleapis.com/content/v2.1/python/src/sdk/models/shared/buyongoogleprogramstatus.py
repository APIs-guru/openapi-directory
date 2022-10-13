from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class BuyOnGoogleProgramStatusBusinessModelEnum(str, Enum):
    BUSINESS_MODEL_UNSPECIFIED = "BUSINESS_MODEL_UNSPECIFIED"
    MANUFACTURER = "MANUFACTURER"
    IMPORTER = "IMPORTER"
    RESELLER = "RESELLER"
    OTHER = "OTHER"

class BuyOnGoogleProgramStatusOnlineSalesChannelEnum(str, Enum):
    ONLINE_SALES_CHANNEL_UNSPECIFIED = "ONLINE_SALES_CHANNEL_UNSPECIFIED"
    GOOGLE_EXCLUSIVE = "GOOGLE_EXCLUSIVE"
    GOOGLE_AND_OTHER_WEBSITES = "GOOGLE_AND_OTHER_WEBSITES"

class BuyOnGoogleProgramStatusParticipationStageEnum(str, Enum):
    PROGRAM_PARTICIPATION_STAGE_UNSPECIFIED = "PROGRAM_PARTICIPATION_STAGE_UNSPECIFIED"
    NOT_ELIGIBLE = "NOT_ELIGIBLE"
    ELIGIBLE = "ELIGIBLE"
    ONBOARDING = "ONBOARDING"
    ELIGIBLE_FOR_REVIEW = "ELIGIBLE_FOR_REVIEW"
    PENDING_REVIEW = "PENDING_REVIEW"
    REVIEW_DISAPPROVED = "REVIEW_DISAPPROVED"
    ACTIVE = "ACTIVE"
    PAUSED = "PAUSED"


@dataclass_json
@dataclass
class BuyOnGoogleProgramStatus:
    business_model: Optional[List[BuyOnGoogleProgramStatusBusinessModelEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'businessModel' }})
    customer_service_pending_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerServicePendingEmail' }})
    customer_service_pending_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerServicePendingPhoneNumber' }})
    customer_service_pending_phone_region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerServicePendingPhoneRegionCode' }})
    customer_service_verified_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerServiceVerifiedEmail' }})
    customer_service_verified_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerServiceVerifiedPhoneNumber' }})
    customer_service_verified_phone_region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerServiceVerifiedPhoneRegionCode' }})
    online_sales_channel: Optional[BuyOnGoogleProgramStatusOnlineSalesChannelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onlineSalesChannel' }})
    participation_stage: Optional[BuyOnGoogleProgramStatusParticipationStageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'participationStage' }})
    
