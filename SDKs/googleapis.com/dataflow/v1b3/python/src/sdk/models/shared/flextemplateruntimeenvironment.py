from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnum(str, Enum):
    AUTOSCALING_ALGORITHM_UNKNOWN = "AUTOSCALING_ALGORITHM_UNKNOWN"
    AUTOSCALING_ALGORITHM_NONE = "AUTOSCALING_ALGORITHM_NONE"
    AUTOSCALING_ALGORITHM_BASIC = "AUTOSCALING_ALGORITHM_BASIC"

class FlexTemplateRuntimeEnvironmentFlexrsGoalEnum(str, Enum):
    FLEXRS_UNSPECIFIED = "FLEXRS_UNSPECIFIED"
    FLEXRS_SPEED_OPTIMIZED = "FLEXRS_SPEED_OPTIMIZED"
    FLEXRS_COST_OPTIMIZED = "FLEXRS_COST_OPTIMIZED"

class FlexTemplateRuntimeEnvironmentIPConfigurationEnum(str, Enum):
    WORKER_IP_UNSPECIFIED = "WORKER_IP_UNSPECIFIED"
    WORKER_IP_PUBLIC = "WORKER_IP_PUBLIC"
    WORKER_IP_PRIVATE = "WORKER_IP_PRIVATE"


@dataclass_json
@dataclass
class FlexTemplateRuntimeEnvironment:
    r"""FlexTemplateRuntimeEnvironment
    The environment values to be set at runtime for flex template.
    """
    
    additional_experiments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalExperiments') }})
    additional_user_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalUserLabels') }})
    autoscaling_algorithm: Optional[FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoscalingAlgorithm') }})
    disk_size_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskSizeGb') }})
    dump_heap_on_oom: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dumpHeapOnOom') }})
    enable_launcher_vm_serial_port_logging: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableLauncherVmSerialPortLogging') }})
    enable_streaming_engine: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableStreamingEngine') }})
    flexrs_goal: Optional[FlexTemplateRuntimeEnvironmentFlexrsGoalEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flexrsGoal') }})
    ip_configuration: Optional[FlexTemplateRuntimeEnvironmentIPConfigurationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipConfiguration') }})
    kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyName') }})
    launcher_machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launcherMachineType') }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    max_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxWorkers') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    num_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numWorkers') }})
    save_heap_dumps_to_gcs_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saveHeapDumpsToGcsPath') }})
    sdk_container_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sdkContainerImage') }})
    service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountEmail') }})
    staging_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stagingLocation') }})
    subnetwork: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetwork') }})
    temp_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tempLocation') }})
    worker_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerRegion') }})
    worker_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerZone') }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    
