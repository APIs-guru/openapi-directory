from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudmlv1__location


@dataclass_json
@dataclass
class GoogleCloudMlV1ListLocationsResponse:
    locations: Optional[List[googlecloudmlv1__location.GoogleCloudMlV1Location]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locations' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
