from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteInstancesIDMetadataNamePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteInstancesIDMetadataNameHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteInstancesIDMetadataNameRequest:
    path_params: DeleteInstancesIDMetadataNamePathParams = field(default=None)
    headers: DeleteInstancesIDMetadataNameHeaders = field(default=None)
    

@dataclass
class DeleteInstancesIDMetadataNameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
