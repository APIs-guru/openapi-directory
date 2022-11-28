from dataclasses import dataclass, field



@dataclass
class DeleteRealmIdentityProviderInstancesAliasPathParams:
    alias: str = field(metadata={'path_param': { 'field_name': 'alias', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmIdentityProviderInstancesAliasRequest:
    path_params: DeleteRealmIdentityProviderInstancesAliasPathParams = field()
    

@dataclass
class DeleteRealmIdentityProviderInstancesAliasResponse:
    content_type: str = field()
    status_code: int = field()
    
