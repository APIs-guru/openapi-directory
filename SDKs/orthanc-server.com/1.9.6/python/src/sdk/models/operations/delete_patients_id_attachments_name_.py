from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeletePatientsIDAttachmentsNamePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePatientsIDAttachmentsNameHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match' }})
    

@dataclass
class DeletePatientsIDAttachmentsNameRequest:
    path_params: DeletePatientsIDAttachmentsNamePathParams = field(default=None)
    headers: DeletePatientsIDAttachmentsNameHeaders = field(default=None)
    

@dataclass
class DeletePatientsIDAttachmentsNameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
