from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetInstancesIDAttachmentsNameCompressedDataPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDAttachmentsNameCompressedDataHeaders:
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDAttachmentsNameCompressedDataRequest:
    headers: GetInstancesIDAttachmentsNameCompressedDataHeaders = field()
    path_params: GetInstancesIDAttachmentsNameCompressedDataPathParams = field()
    

@dataclass
class GetInstancesIDAttachmentsNameCompressedDataResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
