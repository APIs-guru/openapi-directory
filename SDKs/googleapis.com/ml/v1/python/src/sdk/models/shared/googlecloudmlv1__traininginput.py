from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudmlv1__encryptionconfig
from . import googlecloudmlv1__replicaconfig
from . import googlecloudmlv1__hyperparameterspec
from . import googlecloudmlv1__replicaconfig
from . import googlecloudmlv1__replicaconfig
from . import googlecloudmlv1__scheduling
from . import googlecloudmlv1__replicaconfig

class GoogleCloudMlV1TrainingInputScaleTierEnum(str, Enum):
    BASIC = "BASIC"
    STANDARD_1 = "STANDARD_1"
    PREMIUM_1 = "PREMIUM_1"
    BASIC_GPU = "BASIC_GPU"
    BASIC_TPU = "BASIC_TPU"
    CUSTOM = "CUSTOM"


@dataclass_json
@dataclass
class GoogleCloudMlV1TrainingInput:
    args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'args' }})
    enable_web_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableWebAccess' }})
    encryption_config: Optional[googlecloudmlv1__encryptionconfig.GoogleCloudMlV1EncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionConfig' }})
    evaluator_config: Optional[googlecloudmlv1__replicaconfig.GoogleCloudMlV1ReplicaConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluatorConfig' }})
    evaluator_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluatorCount' }})
    evaluator_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluatorType' }})
    hyperparameters: Optional[googlecloudmlv1__hyperparameterspec.GoogleCloudMlV1HyperparameterSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hyperparameters' }})
    job_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobDir' }})
    master_config: Optional[googlecloudmlv1__replicaconfig.GoogleCloudMlV1ReplicaConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'masterConfig' }})
    master_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'masterType' }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    package_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageUris' }})
    parameter_server_config: Optional[googlecloudmlv1__replicaconfig.GoogleCloudMlV1ReplicaConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameterServerConfig' }})
    parameter_server_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameterServerCount' }})
    parameter_server_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameterServerType' }})
    python_module: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pythonModule' }})
    python_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pythonVersion' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    runtime_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtimeVersion' }})
    scale_tier: Optional[GoogleCloudMlV1TrainingInputScaleTierEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaleTier' }})
    scheduling: Optional[googlecloudmlv1__scheduling.GoogleCloudMlV1Scheduling] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduling' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    use_chief_in_tf_config: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useChiefInTfConfig' }})
    worker_config: Optional[googlecloudmlv1__replicaconfig.GoogleCloudMlV1ReplicaConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerConfig' }})
    worker_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerCount' }})
    worker_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerType' }})
    
