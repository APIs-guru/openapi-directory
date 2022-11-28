from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetHackathonsComingFormatQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetHackathonsComingFormatRequest:
    query_params: GetHackathonsComingFormatQueryParams = field()
    

@dataclass
class GetHackathonsComingFormatResponse:
    content_type: str = field()
    status_code: int = field()
    
