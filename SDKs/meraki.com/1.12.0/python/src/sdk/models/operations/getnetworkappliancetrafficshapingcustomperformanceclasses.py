from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceTrafficShapingCustomPerformanceClassesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest:
    path_params: GetNetworkApplianceTrafficShapingCustomPerformanceClassesPathParams = field(default=None)
    

@dataclass
class GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_appliance_traffic_shaping_custom_performance_classes_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
