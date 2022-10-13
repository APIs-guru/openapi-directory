from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetDripQueryParams:
    code: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'code', 'style': 'form', 'explode': True }})
    delay: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'delay', 'style': 'form', 'explode': True }})
    duration: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'duration', 'style': 'form', 'explode': True }})
    numbytes: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'numbytes', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDripRequest:
    query_params: GetDripQueryParams = field(default=None)
    

@dataclass
class GetDripResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
