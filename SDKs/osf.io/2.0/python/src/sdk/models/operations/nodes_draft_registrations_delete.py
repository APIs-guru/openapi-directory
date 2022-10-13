from dataclasses import dataclass, field



@dataclass
class NodesDraftRegistrationsDeletePathParams:
    draft_id: str = field(default=None, metadata={'path_param': { 'field_name': 'draft_id', 'style': 'simple', 'explode': False }})
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesDraftRegistrationsDeleteRequest:
    path_params: NodesDraftRegistrationsDeletePathParams = field(default=None)
    

@dataclass
class NodesDraftRegistrationsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
