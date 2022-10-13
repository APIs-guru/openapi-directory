from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleChromeManagementV1ChromeAppRequest:
    app_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appDetails' }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appId' }})
    detail_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detailUri' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    icon_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iconUri' }})
    latest_request_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestRequestTime' }})
    request_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestCount' }})
    
