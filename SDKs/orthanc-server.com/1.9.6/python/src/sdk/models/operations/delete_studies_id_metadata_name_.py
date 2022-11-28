from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteStudiesIDMetadataNamePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteStudiesIDMetadataNameHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteStudiesIDMetadataNameRequest:
    headers: DeleteStudiesIDMetadataNameHeaders = field()
    path_params: DeleteStudiesIDMetadataNamePathParams = field()
    

@dataclass
class DeleteStudiesIDMetadataNameResponse:
    content_type: str = field()
    status_code: int = field()
    
