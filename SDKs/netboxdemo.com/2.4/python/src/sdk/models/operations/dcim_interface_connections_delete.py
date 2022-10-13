from dataclasses import dataclass, field



@dataclass
class DcimInterfaceConnectionsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimInterfaceConnectionsDeleteRequest:
    path_params: DcimInterfaceConnectionsDeletePathParams = field(default=None)
    

@dataclass
class DcimInterfaceConnectionsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
