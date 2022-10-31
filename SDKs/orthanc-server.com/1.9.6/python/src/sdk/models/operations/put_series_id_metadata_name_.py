from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PutSeriesIDMetadataNamePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSeriesIDMetadataNameHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSeriesIDMetadataNameRequest:
    path_params: PutSeriesIDMetadataNamePathParams = field(default=None)
    headers: PutSeriesIDMetadataNameHeaders = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclass
class PutSeriesIDMetadataNameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
