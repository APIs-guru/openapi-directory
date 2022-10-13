from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetInstancesIDMetadataNamePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDMetadataNameHeaders:
    if_none_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-None-Match' }})
    

@dataclass
class GetInstancesIDMetadataNameRequest:
    path_params: GetInstancesIDMetadataNamePathParams = field(default=None)
    headers: GetInstancesIDMetadataNameHeaders = field(default=None)
    

@dataclass
class GetInstancesIDMetadataNameResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
