from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import actinguser
from . import version

class ReleaseTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    DEPLOY = "DEPLOY"
    ROLLBACK = "ROLLBACK"
    SITE_DISABLE = "SITE_DISABLE"


@dataclass_json
@dataclass
class Release:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    release_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releaseTime' }})
    release_user: Optional[actinguser.ActingUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releaseUser' }})
    type: Optional[ReleaseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    version: Optional[version.Version] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
