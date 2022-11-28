from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmAuthenticationRequiredActionsAliasPathParams:
    alias: str = field(metadata={'path_param': { 'field_name': 'alias', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmAuthenticationRequiredActionsAliasRequest:
    path_params: GetRealmAuthenticationRequiredActionsAliasPathParams = field()
    

@dataclass
class GetRealmAuthenticationRequiredActionsAliasResponse:
    content_type: str = field()
    status_code: int = field()
    required_action_provider_representation: Optional[shared.RequiredActionProviderRepresentation] = field(default=None)
    
