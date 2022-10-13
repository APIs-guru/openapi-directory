from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import mediafile

class VideoMetadataVastVersionEnum(str, Enum):
    VAST_VERSION_UNSPECIFIED = "VAST_VERSION_UNSPECIFIED"
    VAST_VERSION_1_0 = "VAST_VERSION_1_0"
    VAST_VERSION_2_0 = "VAST_VERSION_2_0"
    VAST_VERSION_3_0 = "VAST_VERSION_3_0"
    VAST_VERSION_4_0 = "VAST_VERSION_4_0"


@dataclass_json
@dataclass
class VideoMetadata:
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    is_valid_vast: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isValidVast' }})
    is_vpaid: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isVpaid' }})
    media_files: Optional[List[mediafile.MediaFile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaFiles' }})
    skip_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipOffset' }})
    vast_version: Optional[VideoMetadataVastVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vastVersion' }})
    
