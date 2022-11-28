from dataclasses import dataclass, field



@dataclass
class DeleteNetworkApplianceTrafficShapingCustomPerformanceClassPathParams:
    custom_performance_class_id: str = field(metadata={'path_param': { 'field_name': 'customPerformanceClassId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest:
    path_params: DeleteNetworkApplianceTrafficShapingCustomPerformanceClassPathParams = field()
    

@dataclass
class DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse:
    content_type: str = field()
    status_code: int = field()
    
