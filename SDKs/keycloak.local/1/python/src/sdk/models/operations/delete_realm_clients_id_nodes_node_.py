from dataclasses import dataclass, field



@dataclass
class DeleteRealmClientsIDNodesNodePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    node: str = field(default=None, metadata={'path_param': { 'field_name': 'node', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmClientsIDNodesNodeRequest:
    path_params: DeleteRealmClientsIDNodesNodePathParams = field(default=None)
    

@dataclass
class DeleteRealmClientsIDNodesNodeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
