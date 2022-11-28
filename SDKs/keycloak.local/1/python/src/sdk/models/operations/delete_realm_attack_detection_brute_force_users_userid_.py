from dataclasses import dataclass, field



@dataclass
class DeleteRealmAttackDetectionBruteForceUsersUserIDPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmAttackDetectionBruteForceUsersUserIDRequest:
    path_params: DeleteRealmAttackDetectionBruteForceUsersUserIDPathParams = field()
    

@dataclass
class DeleteRealmAttackDetectionBruteForceUsersUserIDResponse:
    content_type: str = field()
    status_code: int = field()
    
