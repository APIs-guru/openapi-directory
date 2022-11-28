from dataclasses import dataclass, field



@dataclass
class DeleteNetworkApplianceStaticRoutePathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    static_route_id: str = field(metadata={'path_param': { 'field_name': 'staticRouteId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkApplianceStaticRouteRequest:
    path_params: DeleteNetworkApplianceStaticRoutePathParams = field()
    

@dataclass
class DeleteNetworkApplianceStaticRouteResponse:
    content_type: str = field()
    status_code: int = field()
    
