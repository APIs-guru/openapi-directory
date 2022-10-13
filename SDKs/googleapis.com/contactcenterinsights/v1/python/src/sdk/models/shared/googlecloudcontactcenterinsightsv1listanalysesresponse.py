from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudcontactcenterinsightsv1analysis


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1ListAnalysesResponse:
    analyses: Optional[List[googlecloudcontactcenterinsightsv1analysis.GoogleCloudContactcenterinsightsV1Analysis]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analyses' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
