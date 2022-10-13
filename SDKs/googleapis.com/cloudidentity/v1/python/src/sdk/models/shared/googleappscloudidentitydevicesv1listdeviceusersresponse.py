from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleappscloudidentitydevicesv1deviceuser


@dataclass_json
@dataclass
class GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse:
    device_users: Optional[List[googleappscloudidentitydevicesv1deviceuser.GoogleAppsCloudidentityDevicesV1DeviceUser]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceUsers' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
