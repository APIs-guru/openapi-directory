from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import substringmatchcriteria

class ReplaceAllShapesWithImageRequestImageReplaceMethodEnum(str, Enum):
    IMAGE_REPLACE_METHOD_UNSPECIFIED = "IMAGE_REPLACE_METHOD_UNSPECIFIED"
    CENTER_INSIDE = "CENTER_INSIDE"
    CENTER_CROP = "CENTER_CROP"

class ReplaceAllShapesWithImageRequestReplaceMethodEnum(str, Enum):
    CENTER_INSIDE = "CENTER_INSIDE"
    CENTER_CROP = "CENTER_CROP"


@dataclass_json
@dataclass
class ReplaceAllShapesWithImageRequest:
    contains_text: Optional[substringmatchcriteria.SubstringMatchCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containsText' }})
    image_replace_method: Optional[ReplaceAllShapesWithImageRequestImageReplaceMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageReplaceMethod' }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageUrl' }})
    page_object_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageObjectIds' }})
    replace_method: Optional[ReplaceAllShapesWithImageRequestReplaceMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replaceMethod' }})
    
