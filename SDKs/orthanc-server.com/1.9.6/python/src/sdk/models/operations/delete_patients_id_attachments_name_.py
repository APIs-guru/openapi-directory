from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeletePatientsIDAttachmentsNamePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePatientsIDAttachmentsNameHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePatientsIDAttachmentsNameRequest:
    headers: DeletePatientsIDAttachmentsNameHeaders = field()
    path_params: DeletePatientsIDAttachmentsNamePathParams = field()
    

@dataclass
class DeletePatientsIDAttachmentsNameResponse:
    content_type: str = field()
    status_code: int = field()
    
