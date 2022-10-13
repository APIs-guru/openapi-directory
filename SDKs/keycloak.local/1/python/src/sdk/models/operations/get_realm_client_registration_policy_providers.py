from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmClientRegistrationPolicyProvidersPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientRegistrationPolicyProvidersRequest:
    path_params: GetRealmClientRegistrationPolicyProvidersPathParams = field(default=None)
    

@dataclass
class GetRealmClientRegistrationPolicyProvidersResponse:
    component_type_representations: Optional[List[shared.ComponentTypeRepresentation]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
