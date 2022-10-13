from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import imagetype_enum


@dataclass_json
@dataclass
class ImageProviderInfo:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    supported_images: Optional[List[imagetype_enum.ImageTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportedImages' }})
    
