from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmAuthenticationRequiredActionsPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmAuthenticationRequiredActionsRequest:
    path_params: GetRealmAuthenticationRequiredActionsPathParams = field(default=None)
    

@dataclass
class GetRealmAuthenticationRequiredActionsResponse:
    content_type: str = field(default=None)
    required_action_provider_representations: Optional[List[shared.RequiredActionProviderRepresentation]] = field(default=None)
    status_code: int = field(default=None)
    
