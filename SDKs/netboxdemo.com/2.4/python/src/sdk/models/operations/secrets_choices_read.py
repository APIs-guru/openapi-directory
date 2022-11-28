from dataclasses import dataclass, field



@dataclass
class SecretsChoicesReadPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SecretsChoicesReadRequest:
    path_params: SecretsChoicesReadPathParams = field()
    

@dataclass
class SecretsChoicesReadResponse:
    content_type: str = field()
    status_code: int = field()
    
