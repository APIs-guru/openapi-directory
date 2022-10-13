from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkTrafficShapingApplicationCategoriesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkTrafficShapingApplicationCategoriesRequest:
    path_params: GetNetworkTrafficShapingApplicationCategoriesPathParams = field(default=None)
    

@dataclass
class GetNetworkTrafficShapingApplicationCategoriesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_traffic_shaping_application_categories_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
