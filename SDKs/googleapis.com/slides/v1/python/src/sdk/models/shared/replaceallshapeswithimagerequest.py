from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""ReplaceAllShapesWithImageRequest
    Replaces all shapes that match the given criteria with the provided image. The images replacing the shapes are rectangular after being inserted into the presentation and do not take on the forms of the shapes.
    """
    
    contains_text: Optional[SubstringMatchCriteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containsText') }})
    image_replace_method: Optional[ReplaceAllShapesWithImageRequestImageReplaceMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageReplaceMethod') }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUrl') }})
    page_object_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageObjectIds') }})
    replace_method: Optional[ReplaceAllShapesWithImageRequestReplaceMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replaceMethod') }})
    
