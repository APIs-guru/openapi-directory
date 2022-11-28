from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ObjectTrackingFrame:
    r"""GoogleCloudDatalabelingV1beta1ObjectTrackingFrame
    Video frame level annotation for object detection and tracking.
    """
    
    bounding_poly: Optional[GoogleCloudDatalabelingV1beta1BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingPoly') }})
    normalized_bounding_poly: Optional[GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('normalizedBoundingPoly') }})
    time_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeOffset') }})
    
