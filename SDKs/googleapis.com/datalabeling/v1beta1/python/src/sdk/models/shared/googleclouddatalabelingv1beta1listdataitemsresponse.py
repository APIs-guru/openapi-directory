from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1dataitem


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ListDataItemsResponse:
    data_items: Optional[List[googleclouddatalabelingv1beta1dataitem.GoogleCloudDatalabelingV1beta1DataItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataItems' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
