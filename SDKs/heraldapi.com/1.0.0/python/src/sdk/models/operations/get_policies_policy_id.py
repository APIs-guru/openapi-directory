from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetPoliciesPolicyIDPathParams:
    policy_id: str = field(metadata={'path_param': { 'field_name': 'policy_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetPoliciesPolicyID200ApplicationJSON:
    policy: Optional[shared.Policy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    

@dataclass
class GetPoliciesPolicyIDRequest:
    path_params: GetPoliciesPolicyIDPathParams = field()
    

@dataclass
class GetPoliciesPolicyIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_policies_policy_id_200_application_json_object: Optional[GetPoliciesPolicyID200ApplicationJSON] = field(default=None)
    
