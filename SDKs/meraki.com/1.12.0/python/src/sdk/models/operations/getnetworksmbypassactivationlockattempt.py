from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSmBypassActivationLockAttemptPathParams:
    attempt_id: str = field(metadata={'path_param': { 'field_name': 'attemptId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSmBypassActivationLockAttemptRequest:
    path_params: GetNetworkSmBypassActivationLockAttemptPathParams = field()
    

@dataclass
class GetNetworkSmBypassActivationLockAttemptResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_sm_bypass_activation_lock_attempt_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
