from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2BoundingPoly:
    r"""GoogleCloudDocumentaiV1beta2BoundingPoly
    A bounding polygon for the detected image annotation.
    """
    
    normalized_vertices: Optional[List[GoogleCloudDocumentaiV1beta2NormalizedVertex]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('normalizedVertices') }})
    vertices: Optional[List[GoogleCloudDocumentaiV1beta2Vertex]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vertices') }})
    
