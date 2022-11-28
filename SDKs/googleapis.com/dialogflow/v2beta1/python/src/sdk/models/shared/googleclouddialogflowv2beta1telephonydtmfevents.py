from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum(str, Enum):
    TELEPHONY_DTMF_UNSPECIFIED = "TELEPHONY_DTMF_UNSPECIFIED"
    DTMF_ONE = "DTMF_ONE"
    DTMF_TWO = "DTMF_TWO"
    DTMF_THREE = "DTMF_THREE"
    DTMF_FOUR = "DTMF_FOUR"
    DTMF_FIVE = "DTMF_FIVE"
    DTMF_SIX = "DTMF_SIX"
    DTMF_SEVEN = "DTMF_SEVEN"
    DTMF_EIGHT = "DTMF_EIGHT"
    DTMF_NINE = "DTMF_NINE"
    DTMF_ZERO = "DTMF_ZERO"
    DTMF_A = "DTMF_A"
    DTMF_B = "DTMF_B"
    DTMF_C = "DTMF_C"
    DTMF_D = "DTMF_D"
    DTMF_STAR = "DTMF_STAR"
    DTMF_POUND = "DTMF_POUND"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1TelephonyDtmfEvents:
    r"""GoogleCloudDialogflowV2beta1TelephonyDtmfEvents
    A wrapper of repeated TelephonyDtmf digits.
    """
    
    dtmf_events: Optional[List[GoogleCloudDialogflowV2beta1TelephonyDtmfEventsDtmfEventsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dtmfEvents') }})
    
