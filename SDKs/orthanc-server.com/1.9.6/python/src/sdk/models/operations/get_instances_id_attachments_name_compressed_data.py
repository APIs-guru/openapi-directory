from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetInstancesIDAttachmentsNameCompressedDataPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDAttachmentsNameCompressedDataHeaders:
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match' }})
    

@dataclass
class GetInstancesIDAttachmentsNameCompressedDataRequest:
    path_params: GetInstancesIDAttachmentsNameCompressedDataPathParams = field(default=None)
    headers: GetInstancesIDAttachmentsNameCompressedDataHeaders = field(default=None)
    

@dataclass
class GetInstancesIDAttachmentsNameCompressedDataResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
