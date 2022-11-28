from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ReplaceImageRequestImageReplaceMethodEnum(str, Enum):
    IMAGE_REPLACE_METHOD_UNSPECIFIED = "IMAGE_REPLACE_METHOD_UNSPECIFIED"
    CENTER_CROP = "CENTER_CROP"


@dataclass_json
@dataclass
class ReplaceImageRequest:
    r"""ReplaceImageRequest
    Replaces an existing image with a new image. Replacing an image removes some image effects from the existing image in order to mirror the behavior of the Docs editor.
    """
    
    image_object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageObjectId') }})
    image_replace_method: Optional[ReplaceImageRequestImageReplaceMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageReplaceMethod') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
