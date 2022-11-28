from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceContentFilteringCategoriesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceContentFilteringCategoriesRequest:
    path_params: GetNetworkApplianceContentFilteringCategoriesPathParams = field()
    

@dataclass
class GetNetworkApplianceContentFilteringCategoriesResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_appliance_content_filtering_categories_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
