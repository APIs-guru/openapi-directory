from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateNetworkPiiRequestPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class CreateNetworkPiiRequestRequestBodyTypeEnum(str, Enum):
    DELETE = "delete"
    RESTRICT_PROCESSING = "restrict processing"


@dataclass_json
@dataclass
class CreateNetworkPiiRequestRequestBody:
    datasets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasets' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    mac: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mac' }})
    sm_device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smDeviceId' }})
    sm_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smUserId' }})
    type: Optional[CreateNetworkPiiRequestRequestBodyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

@dataclass
class CreateNetworkPiiRequestRequest:
    path_params: CreateNetworkPiiRequestPathParams = field(default=None)
    request: Optional[CreateNetworkPiiRequestRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkPiiRequestResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_network_pii_request_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
