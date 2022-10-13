from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import principal

class UnmappedIdentityResolutionStatusCodeEnum(str, Enum):
    CODE_UNSPECIFIED = "CODE_UNSPECIFIED"
    NOT_FOUND = "NOT_FOUND"
    IDENTITY_SOURCE_NOT_FOUND = "IDENTITY_SOURCE_NOT_FOUND"
    IDENTITY_SOURCE_MISCONFIGURED = "IDENTITY_SOURCE_MISCONFIGURED"
    TOO_MANY_MAPPINGS_FOUND = "TOO_MANY_MAPPINGS_FOUND"
    INTERNAL_ERROR = "INTERNAL_ERROR"


@dataclass_json
@dataclass
class UnmappedIdentity:
    external_identity: Optional[principal.Principal] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalIdentity' }})
    resolution_status_code: Optional[UnmappedIdentityResolutionStatusCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolutionStatusCode' }})
    
