from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RegistrationsCitationReadPathParams:
    citation_id: str = field(metadata={'path_param': { 'field_name': 'citation_id', 'style': 'simple', 'explode': False }})
    registration_id: str = field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistrationsCitationReadRequest:
    path_params: RegistrationsCitationReadPathParams = field()
    

@dataclass
class RegistrationsCitationReadResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
