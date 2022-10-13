from dataclasses import dataclass, field



@dataclass
class GetWorkspacesSecurity:
    bearer: shared.SchemeBearer = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetWorkspacesRequest:
    security: GetWorkspacesSecurity = field(default=None)
    

@dataclass
class GetWorkspacesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
