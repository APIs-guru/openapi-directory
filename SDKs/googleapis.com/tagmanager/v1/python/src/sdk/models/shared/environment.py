from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class EnvironmentTypeEnum(str, Enum):
    USER = "user"
    LIVE = "live"
    LATEST = "latest"
    DRAFT = "draft"


@dataclass_json
@dataclass
class Environment:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    authorization_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizationCode' }})
    authorization_timestamp_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizationTimestampMs' }})
    container_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerId' }})
    container_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerVersionId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    enable_debug: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableDebug' }})
    environment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentId' }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[EnvironmentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
