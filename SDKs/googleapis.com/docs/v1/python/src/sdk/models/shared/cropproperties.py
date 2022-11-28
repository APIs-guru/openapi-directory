from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CropProperties:
    r"""CropProperties
    The crop properties of an image. The crop rectangle is represented using fractional offsets from the original content's 4 edges. - If the offset is in the interval (0, 1), the corresponding edge of crop rectangle is positioned inside of the image's original bounding rectangle. - If the offset is negative or greater than 1, the corresponding edge of crop rectangle is positioned outside of the image's original bounding rectangle. - If all offsets and rotation angle are 0, the image is not cropped.
    """
    
    angle: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('angle') }})
    offset_bottom: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offsetBottom') }})
    offset_left: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offsetLeft') }})
    offset_right: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offsetRight') }})
    offset_top: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offsetTop') }})
    
