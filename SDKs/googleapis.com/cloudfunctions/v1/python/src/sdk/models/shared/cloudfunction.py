from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CloudFunctionStatusEnum(str, Enum):
    CLOUD_FUNCTION_STATUS_UNSPECIFIED = "CLOUD_FUNCTION_STATUS_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    OFFLINE = "OFFLINE"
    DEPLOY_IN_PROGRESS = "DEPLOY_IN_PROGRESS"
    DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS"
    UNKNOWN = "UNKNOWN"

class CloudFunctionDockerRegistryEnum(str, Enum):
    DOCKER_REGISTRY_UNSPECIFIED = "DOCKER_REGISTRY_UNSPECIFIED"
    CONTAINER_REGISTRY = "CONTAINER_REGISTRY"
    ARTIFACT_REGISTRY = "ARTIFACT_REGISTRY"

class CloudFunctionIngressSettingsEnum(str, Enum):
    INGRESS_SETTINGS_UNSPECIFIED = "INGRESS_SETTINGS_UNSPECIFIED"
    ALLOW_ALL = "ALLOW_ALL"
    ALLOW_INTERNAL_ONLY = "ALLOW_INTERNAL_ONLY"
    ALLOW_INTERNAL_AND_GCLB = "ALLOW_INTERNAL_AND_GCLB"

class CloudFunctionVpcConnectorEgressSettingsEnum(str, Enum):
    VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED = "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED"
    PRIVATE_RANGES_ONLY = "PRIVATE_RANGES_ONLY"
    ALL_TRAFFIC = "ALL_TRAFFIC"


@dataclass_json
@dataclass
class CloudFunction:
    r"""CloudFunction
    Describes a Cloud Function that contains user computation executed in response to an event. It encapsulate function and triggers configurations.
    """
    
    available_memory_mb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableMemoryMb') }})
    build_environment_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildEnvironmentVariables') }})
    build_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildId') }})
    build_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildName') }})
    build_worker_pool: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildWorkerPool') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    docker_registry: Optional[CloudFunctionDockerRegistryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerRegistry') }})
    docker_repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerRepository') }})
    entry_point: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryPoint') }})
    environment_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentVariables') }})
    event_trigger: Optional[EventTrigger] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTrigger') }})
    https_trigger: Optional[HTTPSTrigger] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpsTrigger') }})
    ingress_settings: Optional[CloudFunctionIngressSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingressSettings') }})
    kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyName') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    max_instances: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxInstances') }})
    min_instances: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minInstances') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    runtime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtime') }})
    secret_environment_variables: Optional[List[SecretEnvVar]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretEnvironmentVariables') }})
    secret_volumes: Optional[List[SecretVolume]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretVolumes') }})
    service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountEmail') }})
    source_archive_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceArchiveUrl') }})
    source_repository: Optional[SourceRepository] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceRepository') }})
    source_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceToken') }})
    source_upload_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceUploadUrl') }})
    status: Optional[CloudFunctionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionId') }})
    vpc_connector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcConnector') }})
    vpc_connector_egress_settings: Optional[CloudFunctionVpcConnectorEgressSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcConnectorEgressSettings') }})
    

@dataclass_json
@dataclass
class CloudFunctionInput:
    r"""CloudFunctionInput
    Describes a Cloud Function that contains user computation executed in response to an event. It encapsulate function and triggers configurations.
    """
    
    available_memory_mb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableMemoryMb') }})
    build_environment_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildEnvironmentVariables') }})
    build_worker_pool: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildWorkerPool') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    docker_registry: Optional[CloudFunctionDockerRegistryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerRegistry') }})
    docker_repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerRepository') }})
    entry_point: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryPoint') }})
    environment_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentVariables') }})
    event_trigger: Optional[EventTrigger] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTrigger') }})
    https_trigger: Optional[HTTPSTriggerInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpsTrigger') }})
    ingress_settings: Optional[CloudFunctionIngressSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingressSettings') }})
    kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyName') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    max_instances: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxInstances') }})
    min_instances: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minInstances') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    runtime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtime') }})
    secret_environment_variables: Optional[List[SecretEnvVar]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretEnvironmentVariables') }})
    secret_volumes: Optional[List[SecretVolume]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretVolumes') }})
    service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountEmail') }})
    source_archive_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceArchiveUrl') }})
    source_repository: Optional[SourceRepositoryInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceRepository') }})
    source_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceToken') }})
    source_upload_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceUploadUrl') }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    vpc_connector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcConnector') }})
    vpc_connector_egress_settings: Optional[CloudFunctionVpcConnectorEgressSettingsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcConnectorEgressSettings') }})
    
