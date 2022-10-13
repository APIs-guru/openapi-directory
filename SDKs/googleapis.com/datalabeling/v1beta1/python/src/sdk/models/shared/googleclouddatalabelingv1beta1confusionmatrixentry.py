from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1annotationspec


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry:
    annotation_spec: Optional[googleclouddatalabelingv1beta1annotationspec.GoogleCloudDatalabelingV1beta1AnnotationSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationSpec' }})
    item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemCount' }})
    
