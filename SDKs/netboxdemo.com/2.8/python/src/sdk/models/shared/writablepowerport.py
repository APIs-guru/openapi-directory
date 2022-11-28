from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class WritablePowerPortTypeEnum(str, Enum):
    IEC_60320_C6 = "iec-60320-c6"
    IEC_60320_C8 = "iec-60320-c8"
    IEC_60320_C14 = "iec-60320-c14"
    IEC_60320_C16 = "iec-60320-c16"
    IEC_60320_C20 = "iec-60320-c20"
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
    NEMA_1_15P = "nema-1-15p"
    NEMA_5_15P = "nema-5-15p"
    NEMA_5_20P = "nema-5-20p"
    NEMA_5_30P = "nema-5-30p"
    NEMA_5_50P = "nema-5-50p"
    NEMA_6_15P = "nema-6-15p"
    NEMA_6_20P = "nema-6-20p"
    NEMA_6_30P = "nema-6-30p"
    NEMA_6_50P = "nema-6-50p"
    NEMA_10_30P = "nema-10-30p"
    NEMA_10_50P = "nema-10-50p"
    NEMA_14_20P = "nema-14-20p"
    NEMA_14_30P = "nema-14-30p"
    NEMA_14_50P = "nema-14-50p"
    NEMA_14_60P = "nema-14-60p"
    NEMA_L1_15P = "nema-l1-15p"
    NEMA_L5_15P = "nema-l5-15p"
    NEMA_L5_20P = "nema-l5-20p"
    NEMA_L5_30P = "nema-l5-30p"
    NEMA_L5_50P = "nema-l5-50p"
    NEMA_L6_15P = "nema-l6-15p"
    NEMA_L6_20P = "nema-l6-20p"
    NEMA_L6_30P = "nema-l6-30p"
    NEMA_L6_50P = "nema-l6-50p"
    NEMA_L10_30P = "nema-l10-30p"
    NEMA_L14_20P = "nema-l14-20p"
    NEMA_L14_30P = "nema-l14-30p"
    NEMA_L14_50P = "nema-l14-50p"
    NEMA_L14_60P = "nema-l14-60p"
    NEMA_L21_20P = "nema-l21-20p"
    NEMA_L21_30P = "nema-l21-30p"
    CS6361C = "cs6361c"
    CS6365C = "cs6365c"
    CS8165C = "cs8165c"
    CS8265C = "cs8265c"
    CS8365C = "cs8365c"
    CS8465C = "cs8465c"
    ITA_E = "ita-e"
    ITA_F = "ita-f"
    ITA_EF = "ita-ef"
    ITA_G = "ita-g"
    ITA_H = "ita-h"
    ITA_I = "ita-i"
    ITA_J = "ita-j"
    ITA_K = "ita-k"
    ITA_L = "ita-l"
    ITA_M = "ita-m"
    ITA_N = "ita-n"
    ITA_O = "ita-o"


@dataclass_json
@dataclass
class WritablePowerPortInput:
    device: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    allocated_draw: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allocated_draw') }})
    cable: Optional[NestedCableInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cable') }})
    connection_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection_status') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    maximum_draw: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximum_draw') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: Optional[WritablePowerPortTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
