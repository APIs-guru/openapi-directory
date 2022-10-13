from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkSwitchRoutingOspfPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum(str, Enum):
    NORMAL = "normal"
    STUB = "stub"
    NSSA = "nssa"


@dataclass_json
@dataclass
class UpdateNetworkSwitchRoutingOspfRequestBodyAreas:
    area_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'areaId' }})
    area_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'areaName' }})
    area_type: UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'areaType' }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    passphrase: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passphrase' }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchRoutingOspfRequestBody:
    areas: Optional[List[UpdateNetworkSwitchRoutingOspfRequestBodyAreas]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'areas' }})
    dead_timer_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deadTimerInSeconds' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    hello_timer_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'helloTimerInSeconds' }})
    md5_authentication_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'md5AuthenticationEnabled' }})
    md5_authentication_key: Optional[UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'md5AuthenticationKey' }})
    

@dataclass
class UpdateNetworkSwitchRoutingOspfRequest:
    path_params: UpdateNetworkSwitchRoutingOspfPathParams = field(default=None)
    request: Optional[UpdateNetworkSwitchRoutingOspfRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSwitchRoutingOspfResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_switch_routing_ospf_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
