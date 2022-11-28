from dataclasses import dataclass, field



@dataclass
class GetRealmIdentityProviderInstancesAliasMapperTypesPathParams:
    alias: str = field(metadata={'path_param': { 'field_name': 'alias', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmIdentityProviderInstancesAliasMapperTypesRequest:
    path_params: GetRealmIdentityProviderInstancesAliasMapperTypesPathParams = field()
    

@dataclass
class GetRealmIdentityProviderInstancesAliasMapperTypesResponse:
    content_type: str = field()
    status_code: int = field()
    
