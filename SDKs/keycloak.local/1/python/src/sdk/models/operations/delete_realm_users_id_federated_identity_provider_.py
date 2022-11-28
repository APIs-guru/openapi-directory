from dataclasses import dataclass, field



@dataclass
class DeleteRealmUsersIDFederatedIdentityProviderPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    provider: str = field(metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmUsersIDFederatedIdentityProviderRequest:
    path_params: DeleteRealmUsersIDFederatedIdentityProviderPathParams = field()
    

@dataclass
class DeleteRealmUsersIDFederatedIdentityProviderResponse:
    content_type: str = field()
    status_code: int = field()
    
