from dataclasses import dataclass, field



@dataclass
class DeleteRealmIdentityProviderInstancesAliasMappersIDPathParams:
    alias: str = field(metadata={'path_param': { 'field_name': 'alias', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmIdentityProviderInstancesAliasMappersIDRequest:
    path_params: DeleteRealmIdentityProviderInstancesAliasMappersIDPathParams = field()
    

@dataclass
class DeleteRealmIdentityProviderInstancesAliasMappersIDResponse:
    content_type: str = field()
    status_code: int = field()
    
