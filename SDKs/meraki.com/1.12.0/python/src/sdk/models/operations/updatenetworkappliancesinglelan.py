from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkApplianceSingleLanPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkApplianceSingleLanRequestBody:
    appliance_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applianceIp' }})
    subnet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnet' }})
    

@dataclass
class UpdateNetworkApplianceSingleLanRequest:
    path_params: UpdateNetworkApplianceSingleLanPathParams = field(default=None)
    request: Optional[UpdateNetworkApplianceSingleLanRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceSingleLanResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_appliance_single_lan_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
