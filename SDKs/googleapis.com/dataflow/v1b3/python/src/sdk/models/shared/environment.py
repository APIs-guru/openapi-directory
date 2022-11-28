from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EnvironmentFlexResourceSchedulingGoalEnum(str, Enum):
    FLEXRS_UNSPECIFIED = "FLEXRS_UNSPECIFIED"
    FLEXRS_SPEED_OPTIMIZED = "FLEXRS_SPEED_OPTIMIZED"
    FLEXRS_COST_OPTIMIZED = "FLEXRS_COST_OPTIMIZED"

class EnvironmentShuffleModeEnum(str, Enum):
    SHUFFLE_MODE_UNSPECIFIED = "SHUFFLE_MODE_UNSPECIFIED"
    VM_BASED = "VM_BASED"
    SERVICE_BASED = "SERVICE_BASED"


@dataclass_json
@dataclass
class Environment:
    r"""Environment
    Describes the environment in which a Dataflow Job runs.
    """
    
    cluster_manager_api_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterManagerApiService') }})
    dataset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataset') }})
    debug_options: Optional[DebugOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debugOptions') }})
    experiments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('experiments') }})
    flex_resource_scheduling_goal: Optional[EnvironmentFlexResourceSchedulingGoalEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flexResourceSchedulingGoal') }})
    internal_experiments: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalExperiments') }})
    sdk_pipeline_options: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sdkPipelineOptions') }})
    service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountEmail') }})
    service_kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceKmsKeyName') }})
    service_options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceOptions') }})
    shuffle_mode: Optional[EnvironmentShuffleModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shuffleMode') }})
    temp_storage_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tempStoragePrefix') }})
    user_agent: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userAgent') }})
    version: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    worker_pools: Optional[List[WorkerPool]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerPools') }})
    worker_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerRegion') }})
    worker_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerZone') }})
    

@dataclass_json
@dataclass
class EnvironmentInput:
    r"""EnvironmentInput
    Describes the environment in which a Dataflow Job runs.
    """
    
    cluster_manager_api_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterManagerApiService') }})
    dataset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataset') }})
    debug_options: Optional[DebugOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debugOptions') }})
    experiments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('experiments') }})
    flex_resource_scheduling_goal: Optional[EnvironmentFlexResourceSchedulingGoalEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flexResourceSchedulingGoal') }})
    internal_experiments: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalExperiments') }})
    sdk_pipeline_options: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sdkPipelineOptions') }})
    service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountEmail') }})
    service_kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceKmsKeyName') }})
    service_options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceOptions') }})
    temp_storage_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tempStoragePrefix') }})
    user_agent: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userAgent') }})
    version: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    worker_pools: Optional[List[WorkerPool]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerPools') }})
    worker_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerRegion') }})
    worker_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerZone') }})
    
