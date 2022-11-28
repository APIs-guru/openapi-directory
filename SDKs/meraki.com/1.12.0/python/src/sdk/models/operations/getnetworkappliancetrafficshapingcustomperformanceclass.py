from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkApplianceTrafficShapingCustomPerformanceClassPathParams:
    custom_performance_class_id: str = field(metadata={'path_param': { 'field_name': 'customPerformanceClassId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest:
    path_params: GetNetworkApplianceTrafficShapingCustomPerformanceClassPathParams = field()
    

@dataclass
class GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_appliance_traffic_shaping_custom_performance_class_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
