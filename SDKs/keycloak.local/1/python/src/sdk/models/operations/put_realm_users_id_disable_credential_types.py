from dataclasses import dataclass, field
from typing import List


@dataclass
class PutRealmUsersIDDisableCredentialTypesPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmUsersIDDisableCredentialTypesRequest:
    path_params: PutRealmUsersIDDisableCredentialTypesPathParams = field()
    request: List[str] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmUsersIDDisableCredentialTypesResponse:
    content_type: str = field()
    status_code: int = field()
    
