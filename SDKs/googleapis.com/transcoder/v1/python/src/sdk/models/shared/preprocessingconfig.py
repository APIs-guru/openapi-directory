from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import audio
from . import color
from . import crop
from . import deblock
from . import deinterlace
from . import denoise
from . import pad


@dataclass_json
@dataclass
class PreprocessingConfig:
    audio: Optional[audio.Audio] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audio' }})
    color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    crop: Optional[crop.Crop] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crop' }})
    deblock: Optional[deblock.Deblock] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deblock' }})
    deinterlace: Optional[deinterlace.Deinterlace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deinterlace' }})
    denoise: Optional[denoise.Denoise] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'denoise' }})
    pad: Optional[pad.Pad] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pad' }})
    
