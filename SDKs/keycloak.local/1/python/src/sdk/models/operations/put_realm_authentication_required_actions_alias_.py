from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutRealmAuthenticationRequiredActionsAliasPathParams:
    alias: str = field(metadata={'path_param': { 'field_name': 'alias', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmAuthenticationRequiredActionsAliasRequest:
    path_params: PutRealmAuthenticationRequiredActionsAliasPathParams = field()
    request: shared.RequiredActionProviderRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmAuthenticationRequiredActionsAliasResponse:
    content_type: str = field()
    status_code: int = field()
    
