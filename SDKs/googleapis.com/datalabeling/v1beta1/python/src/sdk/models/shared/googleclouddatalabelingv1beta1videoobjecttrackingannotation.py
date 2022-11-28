from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation:
    r"""GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation
    Video object tracking annotation.
    """
    
    annotation_spec: Optional[GoogleCloudDatalabelingV1beta1AnnotationSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpec') }})
    object_tracking_frames: Optional[List[GoogleCloudDatalabelingV1beta1ObjectTrackingFrame]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectTrackingFrames') }})
    time_segment: Optional[GoogleCloudDatalabelingV1beta1TimeSegment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeSegment') }})
    
