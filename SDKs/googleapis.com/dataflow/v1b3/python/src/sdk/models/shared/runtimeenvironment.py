from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RuntimeEnvironmentIPConfigurationEnum(str, Enum):
    WORKER_IP_UNSPECIFIED = "WORKER_IP_UNSPECIFIED"
    WORKER_IP_PUBLIC = "WORKER_IP_PUBLIC"
    WORKER_IP_PRIVATE = "WORKER_IP_PRIVATE"


@dataclass_json
@dataclass
class RuntimeEnvironment:
    r"""RuntimeEnvironment
    The environment values to set at runtime.
    """
    
    additional_experiments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalExperiments') }})
    additional_user_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalUserLabels') }})
    bypass_temp_dir_validation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bypassTempDirValidation') }})
    enable_streaming_engine: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableStreamingEngine') }})
    ip_configuration: Optional[RuntimeEnvironmentIPConfigurationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipConfiguration') }})
    kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyName') }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    max_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxWorkers') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    num_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numWorkers') }})
    service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountEmail') }})
    subnetwork: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetwork') }})
    temp_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tempLocation') }})
    worker_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerRegion') }})
    worker_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerZone') }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    
