from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GatewayConfigGatewayAuthMethodEnum(str, Enum):
    GATEWAY_AUTH_METHOD_UNSPECIFIED = "GATEWAY_AUTH_METHOD_UNSPECIFIED"
    ASSOCIATION_ONLY = "ASSOCIATION_ONLY"
    DEVICE_AUTH_TOKEN_ONLY = "DEVICE_AUTH_TOKEN_ONLY"
    ASSOCIATION_AND_DEVICE_AUTH_TOKEN = "ASSOCIATION_AND_DEVICE_AUTH_TOKEN"

class GatewayConfigGatewayTypeEnum(str, Enum):
    GATEWAY_TYPE_UNSPECIFIED = "GATEWAY_TYPE_UNSPECIFIED"
    GATEWAY = "GATEWAY"
    NON_GATEWAY = "NON_GATEWAY"


@dataclass_json
@dataclass
class GatewayConfig:
    r"""GatewayConfig
    Gateway-related configuration and state.
    """
    
    gateway_auth_method: Optional[GatewayConfigGatewayAuthMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayAuthMethod') }})
    gateway_type: Optional[GatewayConfigGatewayTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayType') }})
    last_accessed_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastAccessedGatewayId') }})
    last_accessed_gateway_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastAccessedGatewayTime') }})
    
