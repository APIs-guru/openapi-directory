from dataclasses import dataclass, field



@dataclass
class DeleteRealmAttackDetectionBruteForceUsersPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmAttackDetectionBruteForceUsersRequest:
    path_params: DeleteRealmAttackDetectionBruteForceUsersPathParams = field()
    

@dataclass
class DeleteRealmAttackDetectionBruteForceUsersResponse:
    content_type: str = field()
    status_code: int = field()
    
