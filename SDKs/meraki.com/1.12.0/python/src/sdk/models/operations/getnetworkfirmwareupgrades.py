from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkFirmwareUpgradesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkFirmwareUpgradesRequest:
    path_params: GetNetworkFirmwareUpgradesPathParams = field()
    

@dataclass
class GetNetworkFirmwareUpgradesResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_firmware_upgrades_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
