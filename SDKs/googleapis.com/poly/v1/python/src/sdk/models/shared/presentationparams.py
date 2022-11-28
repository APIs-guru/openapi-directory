from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PresentationParamsColorSpaceEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    LINEAR = "LINEAR"
    GAMMA = "GAMMA"


@dataclass_json
@dataclass
class PresentationParams:
    r"""PresentationParams
    Hints for displaying the asset, based on information available when the asset was uploaded.
    """
    
    background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColor') }})
    color_space: Optional[PresentationParamsColorSpaceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorSpace') }})
    orienting_rotation: Optional[Quaternion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orientingRotation') }})
    
