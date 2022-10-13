from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkApplianceWarmSparePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceWarmSpareRequestBody:
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    spare_serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spareSerial' }})
    uplink_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uplinkMode' }})
    virtual_ip1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualIp1' }})
    virtual_ip2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualIp2' }})
    

@dataclass
class UpdateNetworkApplianceWarmSpareRequest:
    path_params: UpdateNetworkApplianceWarmSparePathParams = field(default=None)
    request: UpdateNetworkApplianceWarmSpareRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceWarmSpareResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_appliance_warm_spare_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
