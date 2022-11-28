from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum(str, Enum):
    FRAUD_UNSPECIFIED = "FRAUD_UNSPECIFIED"
    AD_IMPRESSION_FRAUD_100 = "AD_IMPRESSION_FRAUD_100"
    AD_IMPRESSION_FRAUD_50 = "AD_IMPRESSION_FRAUD_50"
    AD_IMPRESSION_FRAUD_25 = "AD_IMPRESSION_FRAUD_25"
    AD_IMPRESSION_FRAUD_10 = "AD_IMPRESSION_FRAUD_10"
    AD_IMPRESSION_FRAUD_8 = "AD_IMPRESSION_FRAUD_8"
    AD_IMPRESSION_FRAUD_6 = "AD_IMPRESSION_FRAUD_6"
    AD_IMPRESSION_FRAUD_4 = "AD_IMPRESSION_FRAUD_4"
    AD_IMPRESSION_FRAUD_2 = "AD_IMPRESSION_FRAUD_2"


@dataclass_json
@dataclass
class DoubleVerifyFraudInvalidTraffic:
    r"""DoubleVerifyFraudInvalidTraffic
    DoubleVerify Fraud & Invalid Traffic settings.
    """
    
    avoid_insufficient_option: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avoidInsufficientOption') }})
    avoided_fraud_option: Optional[DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avoidedFraudOption') }})
    
