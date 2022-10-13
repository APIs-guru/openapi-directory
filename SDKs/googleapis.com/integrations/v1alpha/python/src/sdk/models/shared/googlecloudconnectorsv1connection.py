from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudconnectorsv1authconfig
from . import googlecloudconnectorsv1configvariable
from . import googlecloudconnectorsv1destinationconfig
from . import googlecloudconnectorsv1lockconfig
from . import googlecloudconnectorsv1nodeconfig
from . import googlecloudconnectorsv1connectionstatus


@dataclass_json
@dataclass
class GoogleCloudConnectorsV1Connection:
    auth_config: Optional[googlecloudconnectorsv1authconfig.GoogleCloudConnectorsV1AuthConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authConfig' }})
    config_variables: Optional[List[googlecloudconnectorsv1configvariable.GoogleCloudConnectorsV1ConfigVariable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configVariables' }})
    connector_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorVersion' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    destination_configs: Optional[List[googlecloudconnectorsv1destinationconfig.GoogleCloudConnectorsV1DestinationConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationConfigs' }})
    envoy_image_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'envoyImageLocation' }})
    image_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageLocation' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    lock_config: Optional[googlecloudconnectorsv1lockconfig.GoogleCloudConnectorsV1LockConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lockConfig' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_config: Optional[googlecloudconnectorsv1nodeconfig.GoogleCloudConnectorsV1NodeConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeConfig' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    service_directory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceDirectory' }})
    status: Optional[googlecloudconnectorsv1connectionstatus.GoogleCloudConnectorsV1ConnectionStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    suspended: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suspended' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
