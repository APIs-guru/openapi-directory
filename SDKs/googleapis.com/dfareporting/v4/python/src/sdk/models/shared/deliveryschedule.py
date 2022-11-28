from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DeliverySchedulePriorityEnum(str, Enum):
    AD_PRIORITY_01 = "AD_PRIORITY_01"
    AD_PRIORITY_02 = "AD_PRIORITY_02"
    AD_PRIORITY_03 = "AD_PRIORITY_03"
    AD_PRIORITY_04 = "AD_PRIORITY_04"
    AD_PRIORITY_05 = "AD_PRIORITY_05"
    AD_PRIORITY_06 = "AD_PRIORITY_06"
    AD_PRIORITY_07 = "AD_PRIORITY_07"
    AD_PRIORITY_08 = "AD_PRIORITY_08"
    AD_PRIORITY_09 = "AD_PRIORITY_09"
    AD_PRIORITY_10 = "AD_PRIORITY_10"
    AD_PRIORITY_11 = "AD_PRIORITY_11"
    AD_PRIORITY_12 = "AD_PRIORITY_12"
    AD_PRIORITY_13 = "AD_PRIORITY_13"
    AD_PRIORITY_14 = "AD_PRIORITY_14"
    AD_PRIORITY_15 = "AD_PRIORITY_15"
    AD_PRIORITY_16 = "AD_PRIORITY_16"


@dataclass_json
@dataclass
class DeliverySchedule:
    r"""DeliverySchedule
    Delivery Schedule.
    """
    
    frequency_cap: Optional[FrequencyCap] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequencyCap') }})
    hard_cutoff: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hardCutoff') }})
    impression_ratio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impressionRatio') }})
    priority: Optional[DeliverySchedulePriorityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    
