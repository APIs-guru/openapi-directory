from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudconnectorsv1destination


@dataclass_json
@dataclass
class GoogleCloudConnectorsV1DestinationConfig:
    destinations: Optional[List[googlecloudconnectorsv1destination.GoogleCloudConnectorsV1Destination]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinations' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    
