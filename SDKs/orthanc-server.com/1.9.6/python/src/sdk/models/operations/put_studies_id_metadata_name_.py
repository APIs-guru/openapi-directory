from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PutStudiesIDMetadataNamePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutStudiesIDMetadataNameHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutStudiesIDMetadataNameRequest:
    headers: PutStudiesIDMetadataNameHeaders = field()
    path_params: PutStudiesIDMetadataNamePathParams = field()
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclass
class PutStudiesIDMetadataNameResponse:
    content_type: str = field()
    status_code: int = field()
    
