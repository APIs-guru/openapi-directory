from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1Position:
    r"""GoogleCloudVisionV1p1beta1Position
    A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image.
    """
    
    x: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('x') }})
    y: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('y') }})
    z: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('z') }})
    
