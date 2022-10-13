from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudconnectorsv1connection


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaListConnectionsResponse:
    connections: Optional[List[googlecloudconnectorsv1connection.GoogleCloudConnectorsV1Connection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
