from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NetworkingConfigConnectionTypeEnum(str, Enum):
    CONNECTION_TYPE_UNSPECIFIED = "CONNECTION_TYPE_UNSPECIFIED"
    VPC_PEERING = "VPC_PEERING"
    PRIVATE_SERVICE_CONNECT = "PRIVATE_SERVICE_CONNECT"


@dataclass_json
@dataclass
class NetworkingConfig:
    r"""NetworkingConfig
    Configuration options for networking connections in the Composer 2 environment.
    """
    
    connection_type: Optional[NetworkingConfigConnectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionType') }})
    
