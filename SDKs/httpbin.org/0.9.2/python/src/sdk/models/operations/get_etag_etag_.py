from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetEtagEtagPathParams:
    etag: str = field(metadata={'path_param': { 'field_name': 'etag', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEtagEtagHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEtagEtagRequest:
    headers: GetEtagEtagHeaders = field()
    path_params: GetEtagEtagPathParams = field()
    

@dataclass
class GetEtagEtagResponse:
    content_type: str = field()
    status_code: int = field()
    
