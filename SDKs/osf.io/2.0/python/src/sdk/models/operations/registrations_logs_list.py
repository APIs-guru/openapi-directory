from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RegistrationsLogsListPathParams:
    registration_id: str = field(metadata={'path_param': { 'field_name': 'registration_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistrationsLogsListRequest:
    path_params: RegistrationsLogsListPathParams = field()
    

@dataclass
class RegistrationsLogsListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
