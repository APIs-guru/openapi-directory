from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteStudiesIDAttachmentsNamePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteStudiesIDAttachmentsNameHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteStudiesIDAttachmentsNameRequest:
    headers: DeleteStudiesIDAttachmentsNameHeaders = field()
    path_params: DeleteStudiesIDAttachmentsNamePathParams = field()
    

@dataclass
class DeleteStudiesIDAttachmentsNameResponse:
    content_type: str = field()
    status_code: int = field()
    
