from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1annotationspec
from . import googleclouddatalabelingv1beta1timesegment


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1VideoEventAnnotation:
    annotation_spec: Optional[googleclouddatalabelingv1beta1annotationspec.GoogleCloudDatalabelingV1beta1AnnotationSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationSpec' }})
    time_segment: Optional[googleclouddatalabelingv1beta1timesegment.GoogleCloudDatalabelingV1beta1TimeSegment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSegment' }})
    
