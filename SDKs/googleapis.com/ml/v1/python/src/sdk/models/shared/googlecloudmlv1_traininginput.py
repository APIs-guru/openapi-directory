from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""GoogleCloudMlV1TrainingInput
    Represents input parameters for a training job. When using the gcloud command to submit your training job, you can specify the input parameters as command-line arguments and/or in a YAML configuration file referenced from the --config command-line argument. For details, see the guide to [submitting a training job](/ai-platform/training/docs/training-jobs).
    """
    
    args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('args') }})
    enable_web_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableWebAccess') }})
    encryption_config: Optional[GoogleCloudMlV1EncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionConfig') }})
    evaluator_config: Optional[GoogleCloudMlV1ReplicaConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluatorConfig') }})
    evaluator_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluatorCount') }})
    evaluator_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluatorType') }})
    hyperparameters: Optional[GoogleCloudMlV1HyperparameterSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hyperparameters') }})
    job_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobDir') }})
    master_config: Optional[GoogleCloudMlV1ReplicaConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterConfig') }})
    master_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterType') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    package_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageUris') }})
    parameter_server_config: Optional[GoogleCloudMlV1ReplicaConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterServerConfig') }})
    parameter_server_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterServerCount') }})
    parameter_server_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterServerType') }})
    python_module: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pythonModule') }})
    python_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pythonVersion') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    runtime_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeVersion') }})
    scale_tier: Optional[GoogleCloudMlV1TrainingInputScaleTierEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaleTier') }})
    scheduling: Optional[GoogleCloudMlV1Scheduling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduling') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    use_chief_in_tf_config: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useChiefInTfConfig') }})
    worker_config: Optional[GoogleCloudMlV1ReplicaConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerConfig') }})
    worker_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerCount') }})
    worker_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerType') }})
    
