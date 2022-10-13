from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ReplaceImageRequestImageReplaceMethodEnum(str, Enum):
    IMAGE_REPLACE_METHOD_UNSPECIFIED = "IMAGE_REPLACE_METHOD_UNSPECIFIED"
    CENTER_CROP = "CENTER_CROP"


@dataclass_json
@dataclass
class ReplaceImageRequest:
    image_object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageObjectId' }})
    image_replace_method: Optional[ReplaceImageRequestImageReplaceMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageReplaceMethod' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
