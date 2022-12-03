from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class PostPoliciesRequestBody:
    quote_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quote_id') }})
    

@dataclass_json
@dataclass
class PostPolicies200ApplicationJSON:
    policy: Optional[shared.Policy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    

@dataclass
class PostPoliciesRequest:
    request: Optional[PostPoliciesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPoliciesResponse:
    content_type: str = field()
    status_code: int = field()
    post_policies_200_application_json_object: Optional[PostPolicies200ApplicationJSON] = field(default=None)
    
