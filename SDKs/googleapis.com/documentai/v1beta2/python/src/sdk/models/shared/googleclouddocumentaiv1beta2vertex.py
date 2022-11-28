from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2Vertex:
    r"""GoogleCloudDocumentaiV1beta2Vertex
    A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.
    """
    
    x: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('x') }})
    y: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('y') }})
    
