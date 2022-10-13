from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class ManifestTypeEnum(str, Enum):
    MANIFEST_TYPE_UNSPECIFIED = "MANIFEST_TYPE_UNSPECIFIED"
    HLS = "HLS"
    DASH = "DASH"


@dataclass_json
@dataclass
class Manifest:
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileName' }})
    mux_streams: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'muxStreams' }})
    type: Optional[ManifestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
