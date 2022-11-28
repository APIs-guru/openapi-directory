from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServerConfig:
    r"""ServerConfig
    Kubernetes Engine service configuration.
    """
    
    channels: Optional[List[ReleaseChannelConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    default_cluster_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultClusterVersion') }})
    default_image_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultImageType') }})
    valid_image_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validImageTypes') }})
    valid_master_versions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validMasterVersions') }})
    valid_node_versions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validNodeVersions') }})
    windows_version_maps: Optional[dict[str, WindowsVersions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('windowsVersionMaps') }})
    
