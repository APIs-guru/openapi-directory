from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ReleaseChannelChannelEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    RAPID = "RAPID"
    REGULAR = "REGULAR"
    STABLE = "STABLE"


@dataclass_json
@dataclass
class ReleaseChannel:
    r"""ReleaseChannel
    ReleaseChannel indicates which release channel a cluster is subscribed to. Release channels are arranged in order of risk. When a cluster is subscribed to a release channel, Google maintains both the master version and the node version. Node auto-upgrade defaults to true and cannot be disabled.
    """
    
    channel: Optional[ReleaseChannelChannelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    
