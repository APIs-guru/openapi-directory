from dataclasses import dataclass, field
from typing import List


@dataclass
class PutRealmUsersIDDisableCredentialTypesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmUsersIDDisableCredentialTypesRequest:
    path_params: PutRealmUsersIDDisableCredentialTypesPathParams = field(default=None)
    request: List[str] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmUsersIDDisableCredentialTypesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
