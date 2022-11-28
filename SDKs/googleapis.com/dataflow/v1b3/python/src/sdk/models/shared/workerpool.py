from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class WorkerPoolDefaultPackageSetEnum(str, Enum):
    DEFAULT_PACKAGE_SET_UNKNOWN = "DEFAULT_PACKAGE_SET_UNKNOWN"
    DEFAULT_PACKAGE_SET_NONE = "DEFAULT_PACKAGE_SET_NONE"
    DEFAULT_PACKAGE_SET_JAVA = "DEFAULT_PACKAGE_SET_JAVA"
    DEFAULT_PACKAGE_SET_PYTHON = "DEFAULT_PACKAGE_SET_PYTHON"

class WorkerPoolIPConfigurationEnum(str, Enum):
    WORKER_IP_UNSPECIFIED = "WORKER_IP_UNSPECIFIED"
    WORKER_IP_PUBLIC = "WORKER_IP_PUBLIC"
    WORKER_IP_PRIVATE = "WORKER_IP_PRIVATE"

class WorkerPoolTeardownPolicyEnum(str, Enum):
    TEARDOWN_POLICY_UNKNOWN = "TEARDOWN_POLICY_UNKNOWN"
    TEARDOWN_ALWAYS = "TEARDOWN_ALWAYS"
    TEARDOWN_ON_SUCCESS = "TEARDOWN_ON_SUCCESS"
    TEARDOWN_NEVER = "TEARDOWN_NEVER"


@dataclass_json
@dataclass
class WorkerPool:
    r"""WorkerPool
    Describes one particular pool of Cloud Dataflow workers to be instantiated by the Cloud Dataflow service in order to perform the computations required by a job. Note that a workflow job may use multiple pools, in order to match the various computational requirements of the various stages of the job.
    """
    
    autoscaling_settings: Optional[AutoscalingSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoscalingSettings') }})
    data_disks: Optional[List[Disk]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataDisks') }})
    default_package_set: Optional[WorkerPoolDefaultPackageSetEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultPackageSet') }})
    disk_size_gb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskSizeGb') }})
    disk_source_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskSourceImage') }})
    disk_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskType') }})
    ip_configuration: Optional[WorkerPoolIPConfigurationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipConfiguration') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    num_threads_per_worker: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numThreadsPerWorker') }})
    num_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numWorkers') }})
    on_host_maintenance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onHostMaintenance') }})
    packages: Optional[List[Package]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packages') }})
    pool_args: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poolArgs') }})
    sdk_harness_container_images: Optional[List[SDKHarnessContainerImage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sdkHarnessContainerImages') }})
    subnetwork: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetwork') }})
    taskrunner_settings: Optional[TaskRunnerSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskrunnerSettings') }})
    teardown_policy: Optional[WorkerPoolTeardownPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teardownPolicy') }})
    worker_harness_container_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerHarnessContainerImage') }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    
