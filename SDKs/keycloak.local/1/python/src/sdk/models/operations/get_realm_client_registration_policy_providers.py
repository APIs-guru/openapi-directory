from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmClientRegistrationPolicyProvidersPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientRegistrationPolicyProvidersRequest:
    path_params: GetRealmClientRegistrationPolicyProvidersPathParams = field()
    

@dataclass
class GetRealmClientRegistrationPolicyProvidersResponse:
    content_type: str = field()
    status_code: int = field()
    component_type_representations: Optional[List[shared.ComponentTypeRepresentation]] = field(default=None)
    
