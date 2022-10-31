from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteSeriesIDAttachmentsNamePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSeriesIDAttachmentsNameHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSeriesIDAttachmentsNameRequest:
    path_params: DeleteSeriesIDAttachmentsNamePathParams = field(default=None)
    headers: DeleteSeriesIDAttachmentsNameHeaders = field(default=None)
    

@dataclass
class DeleteSeriesIDAttachmentsNameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
