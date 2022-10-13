from dataclasses import dataclass, field



@dataclass
class SecretsChoicesReadPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SecretsChoicesReadRequest:
    path_params: SecretsChoicesReadPathParams = field(default=None)
    

@dataclass
class SecretsChoicesReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
