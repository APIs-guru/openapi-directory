from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeletePatientsIDMetadataNamePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePatientsIDMetadataNameHeaders:
    if_match: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Match', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePatientsIDMetadataNameRequest:
    path_params: DeletePatientsIDMetadataNamePathParams = field(default=None)
    headers: DeletePatientsIDMetadataNameHeaders = field(default=None)
    

@dataclass
class DeletePatientsIDMetadataNameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
