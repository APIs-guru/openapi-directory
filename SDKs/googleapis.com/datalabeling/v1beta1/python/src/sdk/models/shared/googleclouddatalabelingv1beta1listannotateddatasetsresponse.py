from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1annotateddataset


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse:
    annotated_datasets: Optional[List[googleclouddatalabelingv1beta1annotateddataset.GoogleCloudDatalabelingV1beta1AnnotatedDataset]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotatedDatasets' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
