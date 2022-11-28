from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetStudiesIDAttachmentsNameDataPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStudiesIDAttachmentsNameDataHeaders:
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStudiesIDAttachmentsNameDataRequest:
    headers: GetStudiesIDAttachmentsNameDataHeaders = field()
    path_params: GetStudiesIDAttachmentsNameDataPathParams = field()
    

@dataclass
class GetStudiesIDAttachmentsNameDataResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
