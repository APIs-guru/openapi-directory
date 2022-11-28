from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OndRoutePathParams:
    destination: str = field(metadata={'path_param': { 'field_name': 'destination', 'style': 'simple', 'explode': False }})
    origin: str = field(metadata={'path_param': { 'field_name': 'origin', 'style': 'simple', 'explode': False }})
    

@dataclass
class OndRouteQueryParams:
    catalogues: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'catalogues', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class OndRouteHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class OndRouteSecurity:
    auth: shared.SchemeAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class OndRouteRequest:
    headers: OndRouteHeaders = field()
    path_params: OndRoutePathParams = field()
    query_params: OndRouteQueryParams = field()
    security: OndRouteSecurity = field()
    

@dataclass
class OndRouteResponse:
    content_type: str = field()
    status_code: int = field()
    ond_route_200_application_json_string: Optional[str] = field(default=None)
    
