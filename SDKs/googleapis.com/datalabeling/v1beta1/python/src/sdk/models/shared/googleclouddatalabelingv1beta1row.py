from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1annotationspec
from . import googleclouddatalabelingv1beta1confusionmatrixentry


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1Row:
    annotation_spec: Optional[googleclouddatalabelingv1beta1annotationspec.GoogleCloudDatalabelingV1beta1AnnotationSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationSpec' }})
    entries: Optional[List[googleclouddatalabelingv1beta1confusionmatrixentry.GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    
