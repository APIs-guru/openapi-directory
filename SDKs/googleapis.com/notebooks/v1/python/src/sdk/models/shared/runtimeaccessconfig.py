from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class RuntimeAccessConfigAccessTypeEnum(str, Enum):
    RUNTIME_ACCESS_TYPE_UNSPECIFIED = "RUNTIME_ACCESS_TYPE_UNSPECIFIED"
    SINGLE_USER = "SINGLE_USER"
    SERVICE_ACCOUNT = "SERVICE_ACCOUNT"


@dataclass_json
@dataclass
class RuntimeAccessConfig:
    access_type: Optional[RuntimeAccessConfigAccessTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessType' }})
    proxy_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proxyUri' }})
    runtime_owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtimeOwner' }})
    
