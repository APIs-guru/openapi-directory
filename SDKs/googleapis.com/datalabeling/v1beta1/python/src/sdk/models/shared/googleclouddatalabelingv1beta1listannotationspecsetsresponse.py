from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1annotationspecset


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse:
    annotation_spec_sets: Optional[List[googleclouddatalabelingv1beta1annotationspecset.GoogleCloudDatalabelingV1beta1AnnotationSpecSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationSpecSets' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
