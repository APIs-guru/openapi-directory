from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import secretenvvar
from . import secretvolume

class ServiceConfigIngressSettingsEnum(str, Enum):
    INGRESS_SETTINGS_UNSPECIFIED = "INGRESS_SETTINGS_UNSPECIFIED"
    ALLOW_ALL = "ALLOW_ALL"
    ALLOW_INTERNAL_ONLY = "ALLOW_INTERNAL_ONLY"
    ALLOW_INTERNAL_AND_GCLB = "ALLOW_INTERNAL_AND_GCLB"

class ServiceConfigVpcConnectorEgressSettingsEnum(str, Enum):
    VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED = "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED"
    PRIVATE_RANGES_ONLY = "PRIVATE_RANGES_ONLY"
    ALL_TRAFFIC = "ALL_TRAFFIC"


@dataclass_json
@dataclass
class ServiceConfig:
    all_traffic_on_latest_revision: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allTrafficOnLatestRevision' }})
    available_memory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableMemory' }})
    environment_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentVariables' }})
    ingress_settings: Optional[ServiceConfigIngressSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingressSettings' }})
    max_instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxInstanceCount' }})
    min_instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minInstanceCount' }})
    revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    secret_environment_variables: Optional[List[secretenvvar.SecretEnvVar]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secretEnvironmentVariables' }})
    secret_volumes: Optional[List[secretvolume.SecretVolume]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secretVolumes' }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccountEmail' }})
    timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutSeconds' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    vpc_connector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcConnector' }})
    vpc_connector_egress_settings: Optional[ServiceConfigVpcConnectorEgressSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcConnectorEgressSettings' }})
    
