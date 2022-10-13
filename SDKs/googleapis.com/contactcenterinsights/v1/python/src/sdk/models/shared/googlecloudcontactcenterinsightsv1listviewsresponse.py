from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudcontactcenterinsightsv1view


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1ListViewsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    views: Optional[List[googlecloudcontactcenterinsightsv1view.GoogleCloudContactcenterinsightsV1View]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'views' }})
    
