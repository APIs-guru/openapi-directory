from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudlocationlocation


@dataclass_json
@dataclass
class GoogleCloudLocationListLocationsResponse:
    locations: Optional[List[googlecloudlocationlocation.GoogleCloudLocationLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locations' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
