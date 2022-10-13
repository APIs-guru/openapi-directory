from dataclasses import dataclass, field
from typing import List


@dataclass
class RegistrationsFilesListPathParams:
    provider: str = field(default=None, metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    registration_id: str = field(default=None, metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistrationsFilesListRequest:
    path_params: RegistrationsFilesListPathParams = field(default=None)
    

@dataclass
class RegistrationsFilesListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
