from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ServiceConfigIngressSettingsEnum(str, Enum):
    INGRESS_SETTINGS_UNSPECIFIED = "INGRESS_SETTINGS_UNSPECIFIED"
    ALLOW_ALL = "ALLOW_ALL"
    ALLOW_INTERNAL_ONLY = "ALLOW_INTERNAL_ONLY"
    ALLOW_INTERNAL_AND_GCLB = "ALLOW_INTERNAL_AND_GCLB"

class ServiceConfigSecurityLevelEnum(str, Enum):
    SECURITY_LEVEL_UNSPECIFIED = "SECURITY_LEVEL_UNSPECIFIED"
    SECURE_ALWAYS = "SECURE_ALWAYS"
    SECURE_OPTIONAL = "SECURE_OPTIONAL"

class ServiceConfigVpcConnectorEgressSettingsEnum(str, Enum):
    VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED = "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED"
    PRIVATE_RANGES_ONLY = "PRIVATE_RANGES_ONLY"
    ALL_TRAFFIC = "ALL_TRAFFIC"


@dataclass_json
@dataclass
class ServiceConfigInput:
    r"""ServiceConfigInput
    Describes the Service being deployed. Currently Supported : Cloud Run (fully managed). Next tag: 23
    """
    
    all_traffic_on_latest_revision: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allTrafficOnLatestRevision') }})
    available_memory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableMemory') }})
    environment_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentVariables') }})
    ingress_settings: Optional[ServiceConfigIngressSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingressSettings') }})
    max_instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxInstanceCount') }})
    min_instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minInstanceCount') }})
    secret_environment_variables: Optional[List[SecretEnvVar]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretEnvironmentVariables') }})
    secret_volumes: Optional[List[SecretVolume]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretVolumes') }})
    security_level: Optional[ServiceConfigSecurityLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityLevel') }})
    service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountEmail') }})
    timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutSeconds') }})
    vpc_connector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcConnector') }})
    vpc_connector_egress_settings: Optional[ServiceConfigVpcConnectorEgressSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcConnectorEgressSettings') }})
    

@dataclass_json
@dataclass
class ServiceConfig:
    r"""ServiceConfig
    Describes the Service being deployed. Currently Supported : Cloud Run (fully managed). Next tag: 23
    """
    
    all_traffic_on_latest_revision: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allTrafficOnLatestRevision') }})
    available_memory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableMemory') }})
    environment_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentVariables') }})
    ingress_settings: Optional[ServiceConfigIngressSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingressSettings') }})
    max_instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxInstanceCount') }})
    min_instance_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minInstanceCount') }})
    revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    secret_environment_variables: Optional[List[SecretEnvVar]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretEnvironmentVariables') }})
    secret_volumes: Optional[List[SecretVolume]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretVolumes') }})
    security_level: Optional[ServiceConfigSecurityLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityLevel') }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountEmail') }})
    timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutSeconds') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    vpc_connector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcConnector') }})
    vpc_connector_egress_settings: Optional[ServiceConfigVpcConnectorEgressSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcConnectorEgressSettings') }})
    
