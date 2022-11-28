from dataclasses import dataclass, field



@dataclass
class SecretsSecretsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SecretsSecretsDeleteRequest:
    path_params: SecretsSecretsDeletePathParams = field()
    

@dataclass
class SecretsSecretsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
