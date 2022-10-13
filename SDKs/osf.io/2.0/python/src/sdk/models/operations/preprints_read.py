from dataclasses import dataclass, field



@dataclass
class PreprintsReadPathParams:
    preprint_id: str = field(default=None, metadata={'path_param': { 'field_name': 'preprint_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PreprintsReadRequest:
    path_params: PreprintsReadPathParams = field(default=None)
    

@dataclass
class PreprintsReadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
