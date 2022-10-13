from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import authconfig
from . import configvariable
from . import destinationconfig
from . import lockconfig
from . import nodeconfig
from . import connectionstatus


@dataclass_json
@dataclass
class Connection:
    auth_config: Optional[authconfig.AuthConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authConfig' }})
    config_variables: Optional[List[configvariable.ConfigVariable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configVariables' }})
    connector_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorVersion' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    destination_configs: Optional[List[destinationconfig.DestinationConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationConfigs' }})
    envoy_image_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'envoyImageLocation' }})
    image_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageLocation' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    lock_config: Optional[lockconfig.LockConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lockConfig' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_config: Optional[nodeconfig.NodeConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeConfig' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    service_directory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceDirectory' }})
    status: Optional[connectionstatus.ConnectionStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    suspended: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suspended' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
