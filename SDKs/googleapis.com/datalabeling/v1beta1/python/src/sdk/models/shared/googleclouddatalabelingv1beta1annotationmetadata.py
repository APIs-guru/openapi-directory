from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1operatormetadata


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1AnnotationMetadata:
    operator_metadata: Optional[googleclouddatalabelingv1beta1operatormetadata.GoogleCloudDatalabelingV1beta1OperatorMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatorMetadata' }})
    
