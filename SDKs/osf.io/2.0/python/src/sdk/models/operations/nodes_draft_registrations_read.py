from dataclasses import dataclass, field



@dataclass
class NodesDraftRegistrationsReadPathParams:
    draft_id: str = field(default=None, metadata={'path_param': { 'field_name': 'draft_id', 'style': 'simple', 'explode': False }})
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesDraftRegistrationsReadRequest:
    path_params: NodesDraftRegistrationsReadPathParams = field(default=None)
    

@dataclass
class NodesDraftRegistrationsReadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
