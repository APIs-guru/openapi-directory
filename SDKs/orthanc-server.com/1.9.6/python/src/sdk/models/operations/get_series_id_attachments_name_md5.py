from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetSeriesIDAttachmentsNameMd5PathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSeriesIDAttachmentsNameMd5Headers:
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSeriesIDAttachmentsNameMd5Request:
    path_params: GetSeriesIDAttachmentsNameMd5PathParams = field(default=None)
    headers: GetSeriesIDAttachmentsNameMd5Headers = field(default=None)
    

@dataclass
class GetSeriesIDAttachmentsNameMd5Response:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
