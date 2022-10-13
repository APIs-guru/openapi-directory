from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import h264codecsettings
from . import h265codecsettings
from . import vp9codecsettings


@dataclass_json
@dataclass
class VideoStream:
    h264: Optional[h264codecsettings.H264CodecSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'h264' }})
    h265: Optional[h265codecsettings.H265CodecSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'h265' }})
    vp9: Optional[vp9codecsettings.Vp9CodecSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vp9' }})
    
