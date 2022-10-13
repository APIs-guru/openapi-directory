from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetMonatsbelegePathParams:
    registrierkasse_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'registrierkasseUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMonatsbelegeQueryParams:
    month: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'month', 'style': 'form', 'explode': True }})
    year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMonatsbelegeRequest:
    path_params: GetMonatsbelegePathParams = field(default=None)
    query_params: GetMonatsbelegeQueryParams = field(default=None)
    

@dataclass
class GetMonatsbelegeResponse:
    content_type: str = field(default=None)
    monatsbelegs: Optional[List[shared.Monatsbeleg]] = field(default=None)
    status_code: int = field(default=None)
    
