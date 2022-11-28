from dataclasses import dataclass, field



@dataclass
class DcimInterfaceConnectionsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimInterfaceConnectionsDeleteRequest:
    path_params: DcimInterfaceConnectionsDeletePathParams = field()
    

@dataclass
class DcimInterfaceConnectionsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
