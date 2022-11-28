from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CropProperties:
    r"""CropProperties
    The crop properties of an object enclosed in a container. For example, an Image. The crop properties is represented by the offsets of four edges which define a crop rectangle. The offsets are measured in percentage from the corresponding edges of the object's original bounding rectangle towards inside, relative to the object's original dimensions. - If the offset is in the interval (0, 1), the corresponding edge of crop rectangle is positioned inside of the object's original bounding rectangle. - If the offset is negative or greater than 1, the corresponding edge of crop rectangle is positioned outside of the object's original bounding rectangle. - If the left edge of the crop rectangle is on the right side of its right edge, the object will be flipped horizontally. - If the top edge of the crop rectangle is below its bottom edge, the object will be flipped vertically. - If all offsets and rotation angle is 0, the object is not cropped. After cropping, the content in the crop rectangle will be stretched to fit its container.
    """
    
    angle: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('angle') }})
    bottom_offset: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bottomOffset') }})
    left_offset: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leftOffset') }})
    right_offset: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rightOffset') }})
    top_offset: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topOffset') }})
    
