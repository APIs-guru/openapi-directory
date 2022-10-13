from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class YadifConfig:
    deinterlace_all_frames: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deinterlaceAllFrames' }})
    disable_spatial_interlacing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableSpatialInterlacing' }})
    mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    parity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parity' }})
    
