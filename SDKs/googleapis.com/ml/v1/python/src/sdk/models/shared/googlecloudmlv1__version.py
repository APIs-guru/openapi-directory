from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudmlv1__acceleratorconfig
from . import googlecloudmlv1__autoscaling
from . import googlecloudmlv1__containerspec
from . import googlecloudmlv1__explanationconfig
from . import googlecloudmlv1__manualscaling
from . import googlecloudmlv1__requestloggingconfig
from . import googlecloudmlv1__routemap

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
    accelerator_config: Optional[googlecloudmlv1__acceleratorconfig.GoogleCloudMlV1AcceleratorConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acceleratorConfig' }})
    auto_scaling: Optional[googlecloudmlv1__autoscaling.GoogleCloudMlV1AutoScaling] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoScaling' }})
    container: Optional[googlecloudmlv1__containerspec.GoogleCloudMlV1ContainerSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'container' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    deployment_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentUri' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    explanation_config: Optional[googlecloudmlv1__explanationconfig.GoogleCloudMlV1ExplanationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explanationConfig' }})
    framework: Optional[GoogleCloudMlV1VersionFrameworkEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'framework' }})
    is_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDefault' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    last_migration_model_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastMigrationModelId' }})
    last_migration_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastMigrationTime' }})
    last_use_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUseTime' }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'machineType' }})
    manual_scaling: Optional[googlecloudmlv1__manualscaling.GoogleCloudMlV1ManualScaling] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manualScaling' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    package_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageUris' }})
    prediction_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predictionClass' }})
    python_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pythonVersion' }})
    request_logging_config: Optional[googlecloudmlv1__requestloggingconfig.GoogleCloudMlV1RequestLoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestLoggingConfig' }})
    routes: Optional[googlecloudmlv1__routemap.GoogleCloudMlV1RouteMap] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routes' }})
    runtime_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtimeVersion' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    state: Optional[GoogleCloudMlV1VersionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
