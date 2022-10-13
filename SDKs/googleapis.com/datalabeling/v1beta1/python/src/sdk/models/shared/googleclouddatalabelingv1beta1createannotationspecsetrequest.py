from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1annotationspecset


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest:
    annotation_spec_set: Optional[googleclouddatalabelingv1beta1annotationspecset.GoogleCloudDatalabelingV1beta1AnnotationSpecSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationSpecSet' }})
    
