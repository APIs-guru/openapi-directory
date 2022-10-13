from dataclasses import dataclass, field



@dataclass
class GetRealmIdentityProviderInstancesAliasMapperTypesPathParams:
    alias: str = field(default=None, metadata={'path_param': { 'field_name': 'alias', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmIdentityProviderInstancesAliasMapperTypesRequest:
    path_params: GetRealmIdentityProviderInstancesAliasMapperTypesPathParams = field(default=None)
    

@dataclass
class GetRealmIdentityProviderInstancesAliasMapperTypesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
