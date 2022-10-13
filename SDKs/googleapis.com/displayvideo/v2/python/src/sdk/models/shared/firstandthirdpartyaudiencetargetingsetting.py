from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class FirstAndThirdPartyAudienceTargetingSettingRecencyEnum(str, Enum):
    RECENCY_NO_LIMIT = "RECENCY_NO_LIMIT"
    RECENCY_1_MINUTE = "RECENCY_1_MINUTE"
    RECENCY_5_MINUTES = "RECENCY_5_MINUTES"
    RECENCY_10_MINUTES = "RECENCY_10_MINUTES"
    RECENCY_15_MINUTES = "RECENCY_15_MINUTES"
    RECENCY_30_MINUTES = "RECENCY_30_MINUTES"
    RECENCY_1_HOUR = "RECENCY_1_HOUR"
    RECENCY_2_HOURS = "RECENCY_2_HOURS"
    RECENCY_3_HOURS = "RECENCY_3_HOURS"
    RECENCY_6_HOURS = "RECENCY_6_HOURS"
    RECENCY_12_HOURS = "RECENCY_12_HOURS"
    RECENCY_1_DAY = "RECENCY_1_DAY"
    RECENCY_2_DAYS = "RECENCY_2_DAYS"
    RECENCY_3_DAYS = "RECENCY_3_DAYS"
    RECENCY_5_DAYS = "RECENCY_5_DAYS"
    RECENCY_7_DAYS = "RECENCY_7_DAYS"
    RECENCY_10_DAYS = "RECENCY_10_DAYS"
    RECENCY_14_DAYS = "RECENCY_14_DAYS"
    RECENCY_15_DAYS = "RECENCY_15_DAYS"
    RECENCY_21_DAYS = "RECENCY_21_DAYS"
    RECENCY_28_DAYS = "RECENCY_28_DAYS"
    RECENCY_30_DAYS = "RECENCY_30_DAYS"
    RECENCY_40_DAYS = "RECENCY_40_DAYS"
    RECENCY_45_DAYS = "RECENCY_45_DAYS"
    RECENCY_60_DAYS = "RECENCY_60_DAYS"
    RECENCY_90_DAYS = "RECENCY_90_DAYS"
    RECENCY_120_DAYS = "RECENCY_120_DAYS"
    RECENCY_180_DAYS = "RECENCY_180_DAYS"
    RECENCY_270_DAYS = "RECENCY_270_DAYS"
    RECENCY_365_DAYS = "RECENCY_365_DAYS"


@dataclass_json
@dataclass
class FirstAndThirdPartyAudienceTargetingSetting:
    first_and_third_party_audience_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstAndThirdPartyAudienceId' }})
    recency: Optional[FirstAndThirdPartyAudienceTargetingSettingRecencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recency' }})
    
