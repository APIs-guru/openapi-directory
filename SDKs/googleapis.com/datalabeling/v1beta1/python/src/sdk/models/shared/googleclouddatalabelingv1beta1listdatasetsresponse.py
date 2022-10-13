from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1dataset


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ListDatasetsResponse:
    datasets: Optional[List[googleclouddatalabelingv1beta1dataset.GoogleCloudDatalabelingV1beta1Dataset]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasets' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
