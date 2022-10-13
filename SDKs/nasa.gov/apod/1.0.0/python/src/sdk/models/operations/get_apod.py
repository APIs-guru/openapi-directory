from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetApodQueryParams:
    date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    hd: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'hd', 'style': 'form', 'explode': True }})
    

@dataclass
class GetApodSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetApodRequest:
    query_params: GetApodQueryParams = field(default=None)
    security: GetApodSecurity = field(default=None)
    

@dataclass
class GetApodResponse:
    content_type: str = field(default=None)
    get_apod_200_application_json_anies: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
