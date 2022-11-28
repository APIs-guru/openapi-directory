from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceContentFilteringPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceContentFilteringRequest:
    path_params: GetNetworkApplianceContentFilteringPathParams = field()
    

@dataclass
class GetNetworkApplianceContentFilteringResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_appliance_content_filtering_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
