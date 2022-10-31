from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetPatientsIDAttachmentsNameCompressedDataPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPatientsIDAttachmentsNameCompressedDataHeaders:
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPatientsIDAttachmentsNameCompressedDataRequest:
    path_params: GetPatientsIDAttachmentsNameCompressedDataPathParams = field(default=None)
    headers: GetPatientsIDAttachmentsNameCompressedDataHeaders = field(default=None)
    

@dataclass
class GetPatientsIDAttachmentsNameCompressedDataResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
