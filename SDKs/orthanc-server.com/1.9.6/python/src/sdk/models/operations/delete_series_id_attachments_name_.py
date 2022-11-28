from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteSeriesIDAttachmentsNamePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSeriesIDAttachmentsNameHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSeriesIDAttachmentsNameRequest:
    headers: DeleteSeriesIDAttachmentsNameHeaders = field()
    path_params: DeleteSeriesIDAttachmentsNamePathParams = field()
    

@dataclass
class DeleteSeriesIDAttachmentsNameResponse:
    content_type: str = field()
    status_code: int = field()
    
