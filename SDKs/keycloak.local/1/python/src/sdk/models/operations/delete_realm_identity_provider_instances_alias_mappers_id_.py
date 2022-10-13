from dataclasses import dataclass, field



@dataclass
class DeleteRealmIdentityProviderInstancesAliasMappersIDPathParams:
    alias: str = field(default=None, metadata={'path_param': { 'field_name': 'alias', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmIdentityProviderInstancesAliasMappersIDRequest:
    path_params: DeleteRealmIdentityProviderInstancesAliasMappersIDPathParams = field(default=None)
    

@dataclass
class DeleteRealmIdentityProviderInstancesAliasMappersIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
