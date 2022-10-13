from dataclasses import dataclass, field



@dataclass
class SecretsSecretsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SecretsSecretsDeleteRequest:
    path_params: SecretsSecretsDeletePathParams = field(default=None)
    

@dataclass
class SecretsSecretsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
