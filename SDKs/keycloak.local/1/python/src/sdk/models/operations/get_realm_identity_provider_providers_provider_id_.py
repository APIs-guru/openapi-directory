from dataclasses import dataclass, field



@dataclass
class GetRealmIdentityProviderProvidersProviderIDPathParams:
    provider_id: str = field(metadata={'path_param': { 'field_name': 'provider_id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmIdentityProviderProvidersProviderIDRequest:
    path_params: GetRealmIdentityProviderProvidersProviderIDPathParams = field()
    

@dataclass
class GetRealmIdentityProviderProvidersProviderIDResponse:
    content_type: str = field()
    status_code: int = field()
    
