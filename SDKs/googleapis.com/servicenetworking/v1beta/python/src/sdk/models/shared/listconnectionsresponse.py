from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudservicenetworkingv1betaconnection


@dataclass_json
@dataclass
class ListConnectionsResponse:
    connections: Optional[List[googlecloudservicenetworkingv1betaconnection.GoogleCloudServicenetworkingV1betaConnection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    
