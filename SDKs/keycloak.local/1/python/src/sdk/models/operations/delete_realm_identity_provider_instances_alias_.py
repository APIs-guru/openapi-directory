from dataclasses import dataclass, field



@dataclass
class DeleteRealmIdentityProviderInstancesAliasPathParams:
    alias: str = field(default=None, metadata={'path_param': { 'field_name': 'alias', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmIdentityProviderInstancesAliasRequest:
    path_params: DeleteRealmIdentityProviderInstancesAliasPathParams = field(default=None)
    

@dataclass
class DeleteRealmIdentityProviderInstancesAliasResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
