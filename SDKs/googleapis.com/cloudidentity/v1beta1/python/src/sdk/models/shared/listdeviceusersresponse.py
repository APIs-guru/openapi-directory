from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deviceuser


@dataclass_json
@dataclass
class ListDeviceUsersResponse:
    device_users: Optional[List[deviceuser.DeviceUser]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceUsers' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
