from dataclasses import dataclass, field



@dataclass
class SecretsSecretRolesDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SecretsSecretRolesDeleteRequest:
    path_params: SecretsSecretRolesDeletePathParams = field()
    

@dataclass
class SecretsSecretRolesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
