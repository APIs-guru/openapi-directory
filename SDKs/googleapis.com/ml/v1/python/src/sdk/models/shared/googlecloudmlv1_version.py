from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudMlV1VersionFrameworkEnum(str, Enum):
    FRAMEWORK_UNSPECIFIED = "FRAMEWORK_UNSPECIFIED"
    TENSORFLOW = "TENSORFLOW"
    SCIKIT_LEARN = "SCIKIT_LEARN"
    XGBOOST = "XGBOOST"

class GoogleCloudMlV1VersionStateEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    READY = "READY"
    CREATING = "CREATING"
    FAILED = "FAILED"
    DELETING = "DELETING"
    UPDATING = "UPDATING"


@dataclass_json
@dataclass
class GoogleCloudMlV1Version:
    r"""GoogleCloudMlV1Version
    Represents a version of the model. Each version is a trained model deployed in the cloud, ready to handle prediction requests. A model can have multiple versions. You can get information about all of the versions of a given model by calling projects.models.versions.list.
    """
    
    accelerator_config: Optional[GoogleCloudMlV1AcceleratorConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceleratorConfig') }})
    auto_scaling: Optional[GoogleCloudMlV1AutoScaling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScaling') }})
    container: Optional[GoogleCloudMlV1ContainerSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('container') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    deployment_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentUri') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    explanation_config: Optional[GoogleCloudMlV1ExplanationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explanationConfig') }})
    framework: Optional[GoogleCloudMlV1VersionFrameworkEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('framework') }})
    is_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDefault') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    last_migration_model_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastMigrationModelId') }})
    last_migration_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastMigrationTime') }})
    last_use_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUseTime') }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    manual_scaling: Optional[GoogleCloudMlV1ManualScaling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manualScaling') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    package_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageUris') }})
    prediction_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predictionClass') }})
    python_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pythonVersion') }})
    request_logging_config: Optional[GoogleCloudMlV1RequestLoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestLoggingConfig') }})
    routes: Optional[GoogleCloudMlV1RouteMap] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routes') }})
    runtime_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeVersion') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    state: Optional[GoogleCloudMlV1VersionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclass
class GoogleCloudMlV1VersionInput:
    r"""GoogleCloudMlV1VersionInput
    Represents a version of the model. Each version is a trained model deployed in the cloud, ready to handle prediction requests. A model can have multiple versions. You can get information about all of the versions of a given model by calling projects.models.versions.list.
    """
    
    accelerator_config: Optional[GoogleCloudMlV1AcceleratorConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceleratorConfig') }})
    auto_scaling: Optional[GoogleCloudMlV1AutoScaling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScaling') }})
    container: Optional[GoogleCloudMlV1ContainerSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('container') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    deployment_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentUri') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    explanation_config: Optional[GoogleCloudMlV1ExplanationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explanationConfig') }})
    framework: Optional[GoogleCloudMlV1VersionFrameworkEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('framework') }})
    is_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDefault') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    last_use_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUseTime') }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    manual_scaling: Optional[GoogleCloudMlV1ManualScaling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manualScaling') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    package_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageUris') }})
    prediction_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predictionClass') }})
    python_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pythonVersion') }})
    request_logging_config: Optional[GoogleCloudMlV1RequestLoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestLoggingConfig') }})
    routes: Optional[GoogleCloudMlV1RouteMap] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routes') }})
    runtime_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeVersion') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    state: Optional[GoogleCloudMlV1VersionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
