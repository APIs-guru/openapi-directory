from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetSeriesIDAttachmentsNameSizePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSeriesIDAttachmentsNameSizeHeaders:
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSeriesIDAttachmentsNameSizeRequest:
    headers: GetSeriesIDAttachmentsNameSizeHeaders = field()
    path_params: GetSeriesIDAttachmentsNameSizePathParams = field()
    

@dataclass
class GetSeriesIDAttachmentsNameSizeResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
