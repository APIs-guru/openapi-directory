from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RegistrationsFilesReadPathParams:
    path: str = field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    provider: str = field(metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    registration_id: str = field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistrationsFilesReadRequest:
    path_params: RegistrationsFilesReadPathParams = field()
    

@dataclass
class RegistrationsFilesReadResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
