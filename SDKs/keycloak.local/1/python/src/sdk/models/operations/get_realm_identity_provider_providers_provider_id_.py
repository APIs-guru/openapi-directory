from dataclasses import dataclass, field



@dataclass
class GetRealmIdentityProviderProvidersProviderIDPathParams:
    provider_id: str = field(default=None, metadata={'path_param': { 'field_name': 'provider_id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmIdentityProviderProvidersProviderIDRequest:
    path_params: GetRealmIdentityProviderProvidersProviderIDPathParams = field(default=None)
    

@dataclass
class GetRealmIdentityProviderProvidersProviderIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
