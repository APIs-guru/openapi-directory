from dataclasses import dataclass, field



@dataclass
class SecretsSecretRolesDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SecretsSecretRolesDeleteRequest:
    path_params: SecretsSecretRolesDeletePathParams = field(default=None)
    

@dataclass
class SecretsSecretRolesDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
