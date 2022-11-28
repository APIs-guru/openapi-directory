from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ChannelChannelTypeEnum(str, Enum):
    CHANNEL_TYPE_UNSPECIFIED = "CHANNEL_TYPE_UNSPECIFIED"
    STABLE = "STABLE"
    BETA = "BETA"
    DEV = "DEV"
    CANARY = "CANARY"
    CANARY_ASAN = "CANARY_ASAN"
    ALL = "ALL"
    EXTENDED = "EXTENDED"


@dataclass_json
@dataclass
class Channel:
    r"""Channel
    Each Channel is owned by a Platform and owns a collection of versions. Possible Channels are listed in the Channel enum below. Not all Channels are available for every Platform (e.g. CANARY does not exist for LINUX).
    """
    
    channel_type: Optional[ChannelChannelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
