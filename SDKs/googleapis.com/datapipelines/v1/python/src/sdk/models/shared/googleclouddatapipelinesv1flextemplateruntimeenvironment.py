from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum(str, Enum):
    FLEXRS_UNSPECIFIED = "FLEXRS_UNSPECIFIED"
    FLEXRS_SPEED_OPTIMIZED = "FLEXRS_SPEED_OPTIMIZED"
    FLEXRS_COST_OPTIMIZED = "FLEXRS_COST_OPTIMIZED"

class GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIPConfigurationEnum(str, Enum):
    WORKER_IP_UNSPECIFIED = "WORKER_IP_UNSPECIFIED"
    WORKER_IP_PUBLIC = "WORKER_IP_PUBLIC"
    WORKER_IP_PRIVATE = "WORKER_IP_PRIVATE"


@dataclass_json
@dataclass
class GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment:
    additional_experiments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalExperiments' }})
    additional_user_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalUserLabels' }})
    enable_streaming_engine: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableStreamingEngine' }})
    flexrs_goal: Optional[GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flexrsGoal' }})
    ip_configuration: Optional[GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIPConfigurationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipConfiguration' }})
    kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyName' }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'machineType' }})
    max_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxWorkers' }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    num_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numWorkers' }})
    service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccountEmail' }})
    subnetwork: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnetwork' }})
    temp_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tempLocation' }})
    worker_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerRegion' }})
    worker_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerZone' }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    
