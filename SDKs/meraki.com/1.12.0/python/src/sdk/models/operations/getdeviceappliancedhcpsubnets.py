from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceApplianceDhcpSubnetsPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceApplianceDhcpSubnetsRequest:
    path_params: GetDeviceApplianceDhcpSubnetsPathParams = field()
    

@dataclass
class GetDeviceApplianceDhcpSubnetsResponse:
    content_type: str = field()
    status_code: int = field()
    get_device_appliance_dhcp_subnets_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
