from dataclasses import dataclass, field



@dataclass
class GetRealmClientsIDInstallationProvidersProviderIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    provider_id: str = field(metadata={'path_param': { 'field_name': 'providerId', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientsIDInstallationProvidersProviderIDRequest:
    path_params: GetRealmClientsIDInstallationProvidersProviderIDPathParams = field()
    

@dataclass
class GetRealmClientsIDInstallationProvidersProviderIDResponse:
    content_type: str = field()
    status_code: int = field()
    
