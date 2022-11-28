from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1BoundingPoly:
    r"""GoogleCloudVisionV1p2beta1BoundingPoly
    A bounding polygon for the detected image annotation.
    """
    
    normalized_vertices: Optional[List[GoogleCloudVisionV1p2beta1NormalizedVertex]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('normalizedVertices') }})
    vertices: Optional[List[GoogleCloudVisionV1p2beta1Vertex]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vertices') }})
    
