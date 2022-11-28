from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly:
    r"""GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly
    Normalized bounding polygon.
    """
    
    normalized_vertices: Optional[List[GoogleCloudDatalabelingV1beta1NormalizedVertex]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('normalizedVertices') }})
    
