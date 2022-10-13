from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleappscloudidentitydevicesv1clientstate


@dataclass_json
@dataclass
class GoogleAppsCloudidentityDevicesV1ListClientStatesResponse:
    client_states: Optional[List[googleappscloudidentitydevicesv1clientstate.GoogleAppsCloudidentityDevicesV1ClientState]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientStates' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
