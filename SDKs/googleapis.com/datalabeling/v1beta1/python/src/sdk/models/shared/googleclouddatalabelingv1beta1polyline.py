from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1Polyline:
    r"""GoogleCloudDatalabelingV1beta1Polyline
    A line with multiple line segments.
    """
    
    vertices: Optional[List[GoogleCloudDatalabelingV1beta1Vertex]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vertices') }})
    
