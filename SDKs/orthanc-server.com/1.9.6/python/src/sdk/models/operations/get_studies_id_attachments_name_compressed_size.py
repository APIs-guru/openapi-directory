from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetStudiesIDAttachmentsNameCompressedSizePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStudiesIDAttachmentsNameCompressedSizeHeaders:
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStudiesIDAttachmentsNameCompressedSizeRequest:
    headers: GetStudiesIDAttachmentsNameCompressedSizeHeaders = field()
    path_params: GetStudiesIDAttachmentsNameCompressedSizePathParams = field()
    

@dataclass
class GetStudiesIDAttachmentsNameCompressedSizeResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
