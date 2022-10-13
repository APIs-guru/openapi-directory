from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import addressclaimset
from . import accesstoken_authorization
from . import accesstoken_certconf
from . import accesstoken_access

class AccessTokenCategoryEnum(str, Enum):
    INTERNAL = "INTERNAL"
    ACCESS = "ACCESS"
    ID = "ID"
    ADMIN = "ADMIN"
    USERINFO = "USERINFO"


@dataclass_json
@dataclass
class AccessToken:
    acr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acr' }})
    address: Optional[addressclaimset.AddressClaimSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    allowed_origins: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowed-origins' }})
    at_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'at_hash' }})
    auth_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_time' }})
    authorization: Optional[accesstoken_authorization.AccessTokenAuthorization] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorization' }})
    azp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'azp' }})
    birthdate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'birthdate' }})
    c_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'c_hash' }})
    category: Optional[AccessTokenCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    claims_locales: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'claims_locales' }})
    cnf: Optional[accesstoken_certconf.AccessTokenCertConf] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cnf' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    email_verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email_verified' }})
    exp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exp' }})
    family_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'family_name' }})
    gender: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    given_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'given_name' }})
    iat: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iat' }})
    iss: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iss' }})
    jti: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jti' }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locale' }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'middle_name' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nbf: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nbf' }})
    nickname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nickname' }})
    nonce: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonce' }})
    other_claims: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otherClaims' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_number' }})
    phone_number_verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_number_verified' }})
    picture: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'picture' }})
    preferred_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferred_username' }})
    profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profile' }})
    realm_access: Optional[accesstoken_access.AccessTokenAccess] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'realm_access' }})
    s_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's_hash' }})
    scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    session_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'session_state' }})
    sub: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sub' }})
    trusted_certs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trusted-certs' }})
    typ: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typ' }})
    updated_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'website' }})
    zoneinfo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zoneinfo' }})
    
