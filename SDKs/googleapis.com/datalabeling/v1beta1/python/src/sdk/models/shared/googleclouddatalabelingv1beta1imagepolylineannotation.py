from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1annotationspec
from . import googleclouddatalabelingv1beta1normalizedpolyline
from . import googleclouddatalabelingv1beta1polyline


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation:
    annotation_spec: Optional[googleclouddatalabelingv1beta1annotationspec.GoogleCloudDatalabelingV1beta1AnnotationSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationSpec' }})
    normalized_polyline: Optional[googleclouddatalabelingv1beta1normalizedpolyline.GoogleCloudDatalabelingV1beta1NormalizedPolyline] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'normalizedPolyline' }})
    polyline: Optional[googleclouddatalabelingv1beta1polyline.GoogleCloudDatalabelingV1beta1Polyline] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'polyline' }})
    
