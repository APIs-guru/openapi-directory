from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import imagetype_enum


@dataclass_json
@dataclass
class ImageInfo:
    blur_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlurHash' }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Height' }})
    image_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageIndex' }})
    image_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageTag' }})
    image_type: Optional[imagetype_enum.ImageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageType' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Path' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Size' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Width' }})
    
