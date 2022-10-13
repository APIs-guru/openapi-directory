from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import releasechannelconfig
from . import windowsversions


@dataclass_json
@dataclass
class ServerConfig:
    channels: Optional[List[releasechannelconfig.ReleaseChannelConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channels' }})
    default_cluster_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultClusterVersion' }})
    default_image_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultImageType' }})
    valid_image_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validImageTypes' }})
    valid_master_versions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validMasterVersions' }})
    valid_node_versions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validNodeVersions' }})
    windows_version_maps: Optional[dict[str, windowsversions.WindowsVersions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'windowsVersionMaps' }})
    
