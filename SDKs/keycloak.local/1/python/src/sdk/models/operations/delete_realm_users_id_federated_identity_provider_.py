from dataclasses import dataclass, field



@dataclass
class DeleteRealmUsersIDFederatedIdentityProviderPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    provider: str = field(default=None, metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmUsersIDFederatedIdentityProviderRequest:
    path_params: DeleteRealmUsersIDFederatedIdentityProviderPathParams = field(default=None)
    

@dataclass
class DeleteRealmUsersIDFederatedIdentityProviderResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
