from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import availableversion

class ReleaseChannelConfigChannelEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    RAPID = "RAPID"
    REGULAR = "REGULAR"
    STABLE = "STABLE"


@dataclass_json
@dataclass
class ReleaseChannelConfig:
    available_versions: Optional[List[availableversion.AvailableVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableVersions' }})
    channel: Optional[ReleaseChannelConfigChannelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    default_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultVersion' }})
    valid_versions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validVersions' }})
    
