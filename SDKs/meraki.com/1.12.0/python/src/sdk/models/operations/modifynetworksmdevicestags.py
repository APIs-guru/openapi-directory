from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class ModifyNetworkSmDevicesTagsPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ModifyNetworkSmDevicesTagsRequestBody:
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids' }})
    scope: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    serials: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serials' }})
    tags: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    update_action: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateAction' }})
    wifi_macs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wifiMacs' }})
    

@dataclass
class ModifyNetworkSmDevicesTagsRequest:
    path_params: ModifyNetworkSmDevicesTagsPathParams = field(default=None)
    request: ModifyNetworkSmDevicesTagsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ModifyNetworkSmDevicesTagsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    modify_network_sm_devices_tags_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
