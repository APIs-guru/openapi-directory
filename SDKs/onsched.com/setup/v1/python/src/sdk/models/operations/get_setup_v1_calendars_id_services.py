from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSetupV1CalendarsIDServicesPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1CalendarsIDServicesQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSetupV1CalendarsIDServicesRequest:
    path_params: GetSetupV1CalendarsIDServicesPathParams = field()
    query_params: GetSetupV1CalendarsIDServicesQueryParams = field()
    

@dataclass
class GetSetupV1CalendarsIDServicesResponse:
    content_type: str = field()
    status_code: int = field()
    service_list_view_model: Optional[dict[str, Any]] = field(default=None)
    
