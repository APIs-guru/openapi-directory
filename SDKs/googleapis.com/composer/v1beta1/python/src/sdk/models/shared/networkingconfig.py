from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class NetworkingConfigConnectionTypeEnum(str, Enum):
    CONNECTION_TYPE_UNSPECIFIED = "CONNECTION_TYPE_UNSPECIFIED"
    VPC_PEERING = "VPC_PEERING"
    PRIVATE_SERVICE_CONNECT = "PRIVATE_SERVICE_CONNECT"


@dataclass_json
@dataclass
class NetworkingConfig:
    connection_type: Optional[NetworkingConfigConnectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionType' }})
    
