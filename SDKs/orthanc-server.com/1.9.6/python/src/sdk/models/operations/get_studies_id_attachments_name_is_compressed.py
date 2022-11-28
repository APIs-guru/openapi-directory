from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetStudiesIDAttachmentsNameIsCompressedPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStudiesIDAttachmentsNameIsCompressedHeaders:
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStudiesIDAttachmentsNameIsCompressedRequest:
    headers: GetStudiesIDAttachmentsNameIsCompressedHeaders = field()
    path_params: GetStudiesIDAttachmentsNameIsCompressedPathParams = field()
    

@dataclass
class GetStudiesIDAttachmentsNameIsCompressedResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
