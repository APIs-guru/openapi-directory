from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetInstancesIDAttachmentsNameCompressedMd5PathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDAttachmentsNameCompressedMd5Headers:
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match' }})
    

@dataclass
class GetInstancesIDAttachmentsNameCompressedMd5Request:
    path_params: GetInstancesIDAttachmentsNameCompressedMd5PathParams = field(default=None)
    headers: GetInstancesIDAttachmentsNameCompressedMd5Headers = field(default=None)
    

@dataclass
class GetInstancesIDAttachmentsNameCompressedMd5Response:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
