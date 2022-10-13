from dataclasses import dataclass, field



@dataclass
class DeleteNetworkApplianceTrafficShapingCustomPerformanceClassPathParams:
    custom_performance_class_id: str = field(default=None, metadata={'path_param': { 'field_name': 'customPerformanceClassId', 'style': 'simple', 'explode': False }})
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest:
    path_params: DeleteNetworkApplianceTrafficShapingCustomPerformanceClassPathParams = field(default=None)
    

@dataclass
class DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
