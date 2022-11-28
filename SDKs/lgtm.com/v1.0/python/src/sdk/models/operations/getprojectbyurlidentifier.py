from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetProjectByURLIdentifierPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    provider: str = field(metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProjectByURLIdentifierSecurity:
    access_token: shared.SchemeAccessToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetProjectByURLIdentifierRequest:
    path_params: GetProjectByURLIdentifierPathParams = field()
    security: GetProjectByURLIdentifierSecurity = field()
    

@dataclass
class GetProjectByURLIdentifierResponse:
    content_type: str = field()
    status_code: int = field()
    project_details: Optional[shared.ProjectDetails] = field(default=None)
    
