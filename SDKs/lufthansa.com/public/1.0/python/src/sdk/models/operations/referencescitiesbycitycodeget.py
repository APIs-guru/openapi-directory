from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ReferencesCitiesByCityCodeGetPathParams:
    city_code: str = field(default=None, metadata={'path_param': { 'field_name': 'cityCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReferencesCitiesByCityCodeGetQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class ReferencesCitiesByCityCodeGetHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept' }})
    

@dataclass
class ReferencesCitiesByCityCodeGetSecurity:
    auth: shared.SchemeAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReferencesCitiesByCityCodeGetRequest:
    path_params: ReferencesCitiesByCityCodeGetPathParams = field(default=None)
    query_params: ReferencesCitiesByCityCodeGetQueryParams = field(default=None)
    headers: ReferencesCitiesByCityCodeGetHeaders = field(default=None)
    security: ReferencesCitiesByCityCodeGetSecurity = field(default=None)
    

@dataclass
class ReferencesCitiesByCityCodeGetResponse:
    content_type: str = field(default=None)
    references_cities_by_city_code_get_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
