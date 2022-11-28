from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetStudiesIDAttachmentsNameSizePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStudiesIDAttachmentsNameSizeHeaders:
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStudiesIDAttachmentsNameSizeRequest:
    headers: GetStudiesIDAttachmentsNameSizeHeaders = field()
    path_params: GetStudiesIDAttachmentsNameSizePathParams = field()
    

@dataclass
class GetStudiesIDAttachmentsNameSizeResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
