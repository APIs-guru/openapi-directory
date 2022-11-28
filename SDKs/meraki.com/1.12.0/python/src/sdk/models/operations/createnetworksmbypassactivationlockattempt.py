from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateNetworkSmBypassActivationLockAttemptPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkSmBypassActivationLockAttemptRequestBody:
    ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    

@dataclass
class CreateNetworkSmBypassActivationLockAttemptRequest:
    path_params: CreateNetworkSmBypassActivationLockAttemptPathParams = field()
    request: CreateNetworkSmBypassActivationLockAttemptRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkSmBypassActivationLockAttemptResponse:
    content_type: str = field()
    status_code: int = field()
    create_network_sm_bypass_activation_lock_attempt_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
