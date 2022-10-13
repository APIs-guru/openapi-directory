from dataclasses import dataclass, field



@dataclass
class PreprintsCitationReadPathParams:
    preprint_id: str = field(default=None, metadata={'path_param': { 'field_name': 'preprint_id', 'style': 'simple', 'explode': False }})
    style_id: str = field(default=None, metadata={'path_param': { 'field_name': 'style_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PreprintsCitationReadRequest:
    path_params: PreprintsCitationReadPathParams = field(default=None)
    

@dataclass
class PreprintsCitationReadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
