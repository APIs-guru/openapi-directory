from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetPatientsIDMetadataNamePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPatientsIDMetadataNameHeaders:
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPatientsIDMetadataNameRequest:
    headers: GetPatientsIDMetadataNameHeaders = field()
    path_params: GetPatientsIDMetadataNamePathParams = field()
    

@dataclass
class GetPatientsIDMetadataNameResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
