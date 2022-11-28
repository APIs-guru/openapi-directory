from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OrbitClassOrbitClassTypeEnum(str, Enum):
    IEO = "IEO"
    ATE = "ATE"
    APO = "APO"
    AMO = "AMO"
    MCA = "MCA"
    IMB = "IMB"
    MBA = "MBA"
    OMB = "OMB"
    TJN = "TJN"
    CEN = "CEN"
    TNO = "TNO"
    PAA = "PAA"
    HYA = "HYA"
    HYP = "HYP"
    PAR = "PAR"
    COM = "COM"
    JFC = "JFC"
    HTC = "HTC"
    ETC = "ETC"
    CTC = "CTC"
    J_FC = "JFc"


@dataclass_json
@dataclass
class OrbitClass:
    orbit_class_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orbit_class_description') }})
    orbit_class_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orbit_class_range') }})
    orbit_class_type: Optional[OrbitClassOrbitClassTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orbit_class_type') }})
    
