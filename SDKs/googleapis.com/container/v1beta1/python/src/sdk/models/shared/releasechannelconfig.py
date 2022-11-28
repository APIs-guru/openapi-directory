from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ReleaseChannelConfigChannelEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    RAPID = "RAPID"
    REGULAR = "REGULAR"
    STABLE = "STABLE"


@dataclass_json
@dataclass
class ReleaseChannelConfig:
    r"""ReleaseChannelConfig
    ReleaseChannelConfig exposes configuration for a release channel.
    """
    
    available_versions: Optional[List[AvailableVersion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableVersions') }})
    channel: Optional[ReleaseChannelConfigChannelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    default_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultVersion') }})
    valid_versions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validVersions') }})
    
