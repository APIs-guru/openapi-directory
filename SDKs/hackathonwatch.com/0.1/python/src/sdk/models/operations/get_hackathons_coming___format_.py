from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetHackathonsComingFormatQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetHackathonsComingFormatRequest:
    query_params: GetHackathonsComingFormatQueryParams = field(default=None)
    

@dataclass
class GetHackathonsComingFormatResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
