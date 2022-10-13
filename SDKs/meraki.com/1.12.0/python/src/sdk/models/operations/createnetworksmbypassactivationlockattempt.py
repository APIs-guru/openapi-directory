from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateNetworkSmBypassActivationLockAttemptPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkSmBypassActivationLockAttemptRequestBody:
    ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids' }})
    

@dataclass
class CreateNetworkSmBypassActivationLockAttemptRequest:
    path_params: CreateNetworkSmBypassActivationLockAttemptPathParams = field(default=None)
    request: CreateNetworkSmBypassActivationLockAttemptRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkSmBypassActivationLockAttemptResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_network_sm_bypass_activation_lock_attempt_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
