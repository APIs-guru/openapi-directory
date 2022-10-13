from dataclasses import dataclass, field



@dataclass
class GetRealmClientsIDInstallationProvidersProviderIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    provider_id: str = field(default=None, metadata={'path_param': { 'field_name': 'providerId', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientsIDInstallationProvidersProviderIDRequest:
    path_params: GetRealmClientsIDInstallationProvidersProviderIDPathParams = field(default=None)
    

@dataclass
class GetRealmClientsIDInstallationProvidersProviderIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
