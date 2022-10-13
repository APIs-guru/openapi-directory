from dataclasses import dataclass, field
from typing import Optional


@dataclass
class OndRoutePathParams:
    destination: str = field(default=None, metadata={'path_param': { 'field_name': 'destination', 'style': 'simple', 'explode': False }})
    origin: str = field(default=None, metadata={'path_param': { 'field_name': 'origin', 'style': 'simple', 'explode': False }})
    

@dataclass
class OndRouteQueryParams:
    catalogues: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'catalogues', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class OndRouteHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept' }})
    

@dataclass
class OndRouteSecurity:
    auth: shared.SchemeAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class OndRouteRequest:
    path_params: OndRoutePathParams = field(default=None)
    query_params: OndRouteQueryParams = field(default=None)
    headers: OndRouteHeaders = field(default=None)
    security: OndRouteSecurity = field(default=None)
    

@dataclass
class OndRouteResponse:
    content_type: str = field(default=None)
    ond_route_200_application_json_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
