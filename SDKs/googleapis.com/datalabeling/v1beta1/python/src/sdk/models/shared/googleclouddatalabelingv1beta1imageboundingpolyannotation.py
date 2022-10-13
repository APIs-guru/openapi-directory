from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1annotationspec
from . import googleclouddatalabelingv1beta1boundingpoly
from . import googleclouddatalabelingv1beta1normalizedboundingpoly


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation:
    annotation_spec: Optional[googleclouddatalabelingv1beta1annotationspec.GoogleCloudDatalabelingV1beta1AnnotationSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationSpec' }})
    bounding_poly: Optional[googleclouddatalabelingv1beta1boundingpoly.GoogleCloudDatalabelingV1beta1BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundingPoly' }})
    normalized_bounding_poly: Optional[googleclouddatalabelingv1beta1normalizedboundingpoly.GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'normalizedBoundingPoly' }})
    
