from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeletePatientsIDMetadataNamePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePatientsIDMetadataNameHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePatientsIDMetadataNameRequest:
    headers: DeletePatientsIDMetadataNameHeaders = field()
    path_params: DeletePatientsIDMetadataNamePathParams = field()
    

@dataclass
class DeletePatientsIDMetadataNameResponse:
    content_type: str = field()
    status_code: int = field()
    
