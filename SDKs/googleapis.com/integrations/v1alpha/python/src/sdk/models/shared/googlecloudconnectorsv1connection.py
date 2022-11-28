from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudConnectorsV1Connection:
    r"""GoogleCloudConnectorsV1Connection
    Connection represents an instance of connector.
    """
    
    auth_config: Optional[GoogleCloudConnectorsV1AuthConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authConfig') }})
    config_variables: Optional[List[GoogleCloudConnectorsV1ConfigVariable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configVariables') }})
    connector_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorVersion') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    destination_configs: Optional[List[GoogleCloudConnectorsV1DestinationConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationConfigs') }})
    envoy_image_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('envoyImageLocation') }})
    image_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageLocation') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    lock_config: Optional[GoogleCloudConnectorsV1LockConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lockConfig') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_config: Optional[GoogleCloudConnectorsV1NodeConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeConfig') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    service_directory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceDirectory') }})
    status: Optional[GoogleCloudConnectorsV1ConnectionStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    suspended: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspended') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
