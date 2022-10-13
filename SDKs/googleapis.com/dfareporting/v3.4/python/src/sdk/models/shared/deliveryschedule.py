from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import frequencycap

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
    frequency_cap: Optional[frequencycap.FrequencyCap] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequencyCap' }})
    hard_cutoff: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hardCutoff' }})
    impression_ratio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'impressionRatio' }})
    priority: Optional[DeliverySchedulePriorityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    
