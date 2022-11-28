from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ReferencesCitiesByCityCodeGetPathParams:
    city_code: str = field(metadata={'path_param': { 'field_name': 'cityCode', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReferencesCitiesByCityCodeGetQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class ReferencesCitiesByCityCodeGetHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReferencesCitiesByCityCodeGetSecurity:
    auth: shared.SchemeAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReferencesCitiesByCityCodeGetRequest:
    headers: ReferencesCitiesByCityCodeGetHeaders = field()
    path_params: ReferencesCitiesByCityCodeGetPathParams = field()
    query_params: ReferencesCitiesByCityCodeGetQueryParams = field()
    security: ReferencesCitiesByCityCodeGetSecurity = field()
    

@dataclass
class ReferencesCitiesByCityCodeGetResponse:
    content_type: str = field()
    status_code: int = field()
    references_cities_by_city_code_get_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
