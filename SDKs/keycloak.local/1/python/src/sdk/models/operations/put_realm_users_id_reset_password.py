from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutRealmUsersIDResetPasswordPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmUsersIDResetPasswordRequest:
    path_params: PutRealmUsersIDResetPasswordPathParams = field()
    request: shared.CredentialRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmUsersIDResetPasswordResponse:
    content_type: str = field()
    status_code: int = field()
    
