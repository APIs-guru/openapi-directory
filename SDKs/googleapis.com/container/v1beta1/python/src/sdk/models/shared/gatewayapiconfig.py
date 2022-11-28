from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GatewayAPIConfigChannelEnum(str, Enum):
    CHANNEL_UNSPECIFIED = "CHANNEL_UNSPECIFIED"
    CHANNEL_DISABLED = "CHANNEL_DISABLED"
    CHANNEL_EXPERIMENTAL = "CHANNEL_EXPERIMENTAL"
    CHANNEL_STANDARD = "CHANNEL_STANDARD"


@dataclass_json
@dataclass
class GatewayAPIConfig:
    r"""GatewayAPIConfig
    GatewayAPIConfig contains the desired config of Gateway API on this cluster.
    """
    
    channel: Optional[GatewayAPIConfigChannelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    
