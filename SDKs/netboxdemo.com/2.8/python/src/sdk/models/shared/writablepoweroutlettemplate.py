from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WritablePowerOutletTemplateFeedLegEnum(str, Enum):
    A = "A"
    B = "B"
    C = "C"

class WritablePowerOutletTemplateTypeEnum(str, Enum):
    IEC_60320_C5 = "iec-60320-c5"
    IEC_60320_C7 = "iec-60320-c7"
    IEC_60320_C13 = "iec-60320-c13"
    IEC_60320_C15 = "iec-60320-c15"
    IEC_60320_C19 = "iec-60320-c19"
    IEC_60309_P_N_E_4H = "iec-60309-p-n-e-4h"
    IEC_60309_P_N_E_6H = "iec-60309-p-n-e-6h"
    IEC_60309_P_N_E_9H = "iec-60309-p-n-e-9h"
    IEC_60309_2P_E_4H = "iec-60309-2p-e-4h"
    IEC_60309_2P_E_6H = "iec-60309-2p-e-6h"
    IEC_60309_2P_E_9H = "iec-60309-2p-e-9h"
    IEC_60309_3P_E_4H = "iec-60309-3p-e-4h"
    IEC_60309_3P_E_6H = "iec-60309-3p-e-6h"
    IEC_60309_3P_E_9H = "iec-60309-3p-e-9h"
    IEC_60309_3P_N_E_4H = "iec-60309-3p-n-e-4h"
    IEC_60309_3P_N_E_6H = "iec-60309-3p-n-e-6h"
    IEC_60309_3P_N_E_9H = "iec-60309-3p-n-e-9h"
    NEMA_1_15R = "nema-1-15r"
    NEMA_5_15R = "nema-5-15r"
    NEMA_5_20R = "nema-5-20r"
    NEMA_5_30R = "nema-5-30r"
    NEMA_5_50R = "nema-5-50r"
    NEMA_6_15R = "nema-6-15r"
    NEMA_6_20R = "nema-6-20r"
    NEMA_6_30R = "nema-6-30r"
    NEMA_6_50R = "nema-6-50r"
    NEMA_10_30R = "nema-10-30r"
    NEMA_10_50R = "nema-10-50r"
    NEMA_14_20R = "nema-14-20r"
    NEMA_14_30R = "nema-14-30r"
    NEMA_14_50R = "nema-14-50r"
    NEMA_14_60R = "nema-14-60r"
    NEMA_L1_15R = "nema-l1-15r"
    NEMA_L5_15R = "nema-l5-15r"
    NEMA_L5_20R = "nema-l5-20r"
    NEMA_L5_30R = "nema-l5-30r"
    NEMA_L5_50R = "nema-l5-50r"
    NEMA_L6_15R = "nema-l6-15r"
    NEMA_L6_20R = "nema-l6-20r"
    NEMA_L6_30R = "nema-l6-30r"
    NEMA_L6_50R = "nema-l6-50r"
    NEMA_L10_30R = "nema-l10-30r"
    NEMA_L14_20R = "nema-l14-20r"
    NEMA_L14_30R = "nema-l14-30r"
    NEMA_L14_50R = "nema-l14-50r"
    NEMA_L14_60R = "nema-l14-60r"
    NEMA_L21_20R = "nema-l21-20r"
    NEMA_L21_30R = "nema-l21-30r"
    CS6360_C = "CS6360C"
    CS6364_C = "CS6364C"
    CS8164_C = "CS8164C"
    CS8264_C = "CS8264C"
    CS8364_C = "CS8364C"
    CS8464_C = "CS8464C"
    ITA_E = "ita-e"
    ITA_F = "ita-f"
    ITA_G = "ita-g"
    ITA_H = "ita-h"
    ITA_I = "ita-i"
    ITA_J = "ita-j"
    ITA_K = "ita-k"
    ITA_L = "ita-l"
    ITA_M = "ita-m"
    ITA_N = "ita-n"
    ITA_O = "ita-o"
    HDOT_CX = "hdot-cx"


@dataclass_json
@dataclass
class WritablePowerOutletTemplateInput:
    device_type: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_type') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    feed_leg: Optional[WritablePowerOutletTemplateFeedLegEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feed_leg') }})
    power_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('power_port') }})
    type: Optional[WritablePowerOutletTemplateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
