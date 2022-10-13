from dataclasses import dataclass, field



@dataclass
class DeleteRealmAttackDetectionBruteForceUsersUserIDPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmAttackDetectionBruteForceUsersUserIDRequest:
    path_params: DeleteRealmAttackDetectionBruteForceUsersUserIDPathParams = field(default=None)
    

@dataclass
class DeleteRealmAttackDetectionBruteForceUsersUserIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
