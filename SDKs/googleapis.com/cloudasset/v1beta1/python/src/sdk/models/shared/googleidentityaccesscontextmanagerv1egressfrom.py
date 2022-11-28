from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleIdentityAccesscontextmanagerV1EgressFromIdentityTypeEnum(str, Enum):
    IDENTITY_TYPE_UNSPECIFIED = "IDENTITY_TYPE_UNSPECIFIED"
    ANY_IDENTITY = "ANY_IDENTITY"
    ANY_USER_ACCOUNT = "ANY_USER_ACCOUNT"
    ANY_SERVICE_ACCOUNT = "ANY_SERVICE_ACCOUNT"


@dataclass_json
@dataclass
class GoogleIdentityAccesscontextmanagerV1EgressFrom:
    r"""GoogleIdentityAccesscontextmanagerV1EgressFrom
    Defines the conditions under which an EgressPolicy matches a request. Conditions based on information about the source of the request. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed.
    """
    
    identities: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identities') }})
    identity_type: Optional[GoogleIdentityAccesscontextmanagerV1EgressFromIdentityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityType') }})
    
