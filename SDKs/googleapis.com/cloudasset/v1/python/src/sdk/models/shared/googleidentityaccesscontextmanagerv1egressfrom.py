from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GoogleIdentityAccesscontextmanagerV1EgressFromIdentityTypeEnum(str, Enum):
    IDENTITY_TYPE_UNSPECIFIED = "IDENTITY_TYPE_UNSPECIFIED"
    ANY_IDENTITY = "ANY_IDENTITY"
    ANY_USER_ACCOUNT = "ANY_USER_ACCOUNT"
    ANY_SERVICE_ACCOUNT = "ANY_SERVICE_ACCOUNT"


@dataclass_json
@dataclass
class GoogleIdentityAccesscontextmanagerV1EgressFrom:
    identities: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identities' }})
    identity_type: Optional[GoogleIdentityAccesscontextmanagerV1EgressFromIdentityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityType' }})
    
