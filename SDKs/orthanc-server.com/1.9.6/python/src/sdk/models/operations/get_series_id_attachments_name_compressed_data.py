from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetSeriesIDAttachmentsNameCompressedDataPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSeriesIDAttachmentsNameCompressedDataHeaders:
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match' }})
    

@dataclass
class GetSeriesIDAttachmentsNameCompressedDataRequest:
    path_params: GetSeriesIDAttachmentsNameCompressedDataPathParams = field(default=None)
    headers: GetSeriesIDAttachmentsNameCompressedDataHeaders = field(default=None)
    

@dataclass
class GetSeriesIDAttachmentsNameCompressedDataResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
