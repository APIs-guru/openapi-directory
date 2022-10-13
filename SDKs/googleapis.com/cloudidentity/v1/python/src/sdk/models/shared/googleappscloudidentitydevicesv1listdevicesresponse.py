from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleappscloudidentitydevicesv1device


@dataclass_json
@dataclass
class GoogleAppsCloudidentityDevicesV1ListDevicesResponse:
    devices: Optional[List[googleappscloudidentitydevicesv1device.GoogleAppsCloudidentityDevicesV1Device]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devices' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
