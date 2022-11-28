from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RegistrationsFilesListPathParams:
    provider: str = field(metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    registration_id: str = field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistrationsFilesListRequest:
    path_params: RegistrationsFilesListPathParams = field()
    

@dataclass
class RegistrationsFilesListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
