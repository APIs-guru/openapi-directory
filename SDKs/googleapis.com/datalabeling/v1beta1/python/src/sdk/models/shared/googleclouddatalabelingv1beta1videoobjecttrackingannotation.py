from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1annotationspec
from . import googleclouddatalabelingv1beta1objecttrackingframe
from . import googleclouddatalabelingv1beta1timesegment


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation:
    annotation_spec: Optional[googleclouddatalabelingv1beta1annotationspec.GoogleCloudDatalabelingV1beta1AnnotationSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationSpec' }})
    object_tracking_frames: Optional[List[googleclouddatalabelingv1beta1objecttrackingframe.GoogleCloudDatalabelingV1beta1ObjectTrackingFrame]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectTrackingFrames' }})
    time_segment: Optional[googleclouddatalabelingv1beta1timesegment.GoogleCloudDatalabelingV1beta1TimeSegment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSegment' }})
    
