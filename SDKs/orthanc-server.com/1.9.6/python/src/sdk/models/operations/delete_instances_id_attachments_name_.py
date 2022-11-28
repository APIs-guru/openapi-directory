from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteInstancesIDAttachmentsNamePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteInstancesIDAttachmentsNameHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteInstancesIDAttachmentsNameRequest:
    headers: DeleteInstancesIDAttachmentsNameHeaders = field()
    path_params: DeleteInstancesIDAttachmentsNamePathParams = field()
    

@dataclass
class DeleteInstancesIDAttachmentsNameResponse:
    content_type: str = field()
    status_code: int = field()
    
