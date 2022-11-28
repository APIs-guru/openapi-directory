from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetMonatsbelegePathParams:
    registrierkasse_uuid: str = field(metadata={'path_param': { 'field_name': 'registrierkasseUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMonatsbelegeQueryParams:
    month: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'month', 'style': 'form', 'explode': True }})
    year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMonatsbelegeRequest:
    path_params: GetMonatsbelegePathParams = field()
    query_params: GetMonatsbelegeQueryParams = field()
    

@dataclass
class GetMonatsbelegeResponse:
    content_type: str = field()
    status_code: int = field()
    monatsbelegs: Optional[List[shared.Monatsbeleg]] = field(default=None)
    
