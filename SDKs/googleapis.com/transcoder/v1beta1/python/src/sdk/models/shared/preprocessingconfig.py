from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PreprocessingConfig:
    r"""PreprocessingConfig
    Preprocessing configurations.
    """
    
    audio: Optional[Audio] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio') }})
    color: Optional[Color] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    crop: Optional[Crop] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crop') }})
    deblock: Optional[Deblock] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deblock') }})
    denoise: Optional[Denoise] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('denoise') }})
    pad: Optional[Pad] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pad') }})
    
