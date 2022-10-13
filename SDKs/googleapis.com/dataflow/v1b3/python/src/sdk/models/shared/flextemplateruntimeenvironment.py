from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

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
    additional_experiments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalExperiments' }})
    additional_user_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalUserLabels' }})
    autoscaling_algorithm: Optional[FlexTemplateRuntimeEnvironmentAutoscalingAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoscalingAlgorithm' }})
    disk_size_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskSizeGb' }})
    dump_heap_on_oom: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dumpHeapOnOom' }})
    enable_launcher_vm_serial_port_logging: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableLauncherVmSerialPortLogging' }})
    enable_streaming_engine: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableStreamingEngine' }})
    flexrs_goal: Optional[FlexTemplateRuntimeEnvironmentFlexrsGoalEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flexrsGoal' }})
    ip_configuration: Optional[FlexTemplateRuntimeEnvironmentIPConfigurationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipConfiguration' }})
    kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyName' }})
    launcher_machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'launcherMachineType' }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'machineType' }})
    max_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxWorkers' }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    num_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numWorkers' }})
    save_heap_dumps_to_gcs_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'saveHeapDumpsToGcsPath' }})
    sdk_container_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sdkContainerImage' }})
    service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccountEmail' }})
    staging_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stagingLocation' }})
    subnetwork: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnetwork' }})
    temp_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tempLocation' }})
    worker_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerRegion' }})
    worker_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerZone' }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    
