from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteInstancesIDMetadataNamePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteInstancesIDMetadataNameHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteInstancesIDMetadataNameRequest:
    headers: DeleteInstancesIDMetadataNameHeaders = field()
    path_params: DeleteInstancesIDMetadataNamePathParams = field()
    

@dataclass
class DeleteInstancesIDMetadataNameResponse:
    content_type: str = field()
    status_code: int = field()
    
