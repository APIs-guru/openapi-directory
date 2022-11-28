from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetWorkspacesSecurity:
    bearer: shared.SchemeBearer = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetWorkspacesRequest:
    security: GetWorkspacesSecurity = field()
    

@dataclass
class GetWorkspacesResponse:
    content_type: str = field()
    status_code: int = field()
    
