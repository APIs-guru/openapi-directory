from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1annotationspec
from . import googleclouddatalabelingv1beta1sequentialsegment


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation:
    annotation_spec: Optional[googleclouddatalabelingv1beta1annotationspec.GoogleCloudDatalabelingV1beta1AnnotationSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationSpec' }})
    sequential_segment: Optional[googleclouddatalabelingv1beta1sequentialsegment.GoogleCloudDatalabelingV1beta1SequentialSegment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sequentialSegment' }})
    
