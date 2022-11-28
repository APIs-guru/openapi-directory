from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetInstancesIDAttachmentsNameCompressedMd5PathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDAttachmentsNameCompressedMd5Headers:
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDAttachmentsNameCompressedMd5Request:
    headers: GetInstancesIDAttachmentsNameCompressedMd5Headers = field()
    path_params: GetInstancesIDAttachmentsNameCompressedMd5PathParams = field()
    

@dataclass
class GetInstancesIDAttachmentsNameCompressedMd5Response:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
