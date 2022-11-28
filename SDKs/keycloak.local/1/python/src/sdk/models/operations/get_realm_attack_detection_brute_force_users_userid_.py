from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRealmAttackDetectionBruteForceUsersUserIDPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmAttackDetectionBruteForceUsersUserIDRequest:
    path_params: GetRealmAttackDetectionBruteForceUsersUserIDPathParams = field()
    

@dataclass
class GetRealmAttackDetectionBruteForceUsersUserIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_realm_attack_detection_brute_force_users_user_id_2_xx_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
