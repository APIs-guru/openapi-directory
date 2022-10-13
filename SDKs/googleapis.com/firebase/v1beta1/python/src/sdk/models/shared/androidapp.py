from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class AndroidAppStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    DELETED = "DELETED"


@dataclass_json
@dataclass
class AndroidApp:
    api_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKeyId' }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appId' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageName' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    sha1_hashes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha1Hashes' }})
    sha256_hashes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha256Hashes' }})
    state: Optional[AndroidAppStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
