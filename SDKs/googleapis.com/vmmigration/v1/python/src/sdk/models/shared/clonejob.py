from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CloneJobStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    ACTIVE = "ACTIVE"
    FAILED = "FAILED"
    SUCCEEDED = "SUCCEEDED"
    CANCELLED = "CANCELLED"
    CANCELLING = "CANCELLING"
    ADAPTING_OS = "ADAPTING_OS"


@dataclass_json
@dataclass
class CloneJobInput:
    r"""CloneJobInput
    CloneJob describes the process of creating a clone of a MigratingVM to the requested target based on the latest successful uploaded snapshots. While the migration cycles of a MigratingVm take place, it is possible to verify the uploaded VM can be started in the cloud, by creating a clone. The clone can be created without any downtime, and it is created using the latest snapshots which are already in the cloud. The cloneJob is only responsible for its work, not its products, which means once it is finished, it will never touch the instance it created. It will only delete it in case of the CloneJob being cancelled or upon failure to clone.
    """
    
    compute_engine_target_details: Optional[ComputeEngineTargetDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeEngineTargetDetails') }})
    error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclass_json
@dataclass
class CloneJob:
    r"""CloneJob
    CloneJob describes the process of creating a clone of a MigratingVM to the requested target based on the latest successful uploaded snapshots. While the migration cycles of a MigratingVm take place, it is possible to verify the uploaded VM can be started in the cloud, by creating a clone. The clone can be created without any downtime, and it is created using the latest snapshots which are already in the cloud. The cloneJob is only responsible for its work, not its products, which means once it is finished, it will never touch the instance it created. It will only delete it in case of the CloneJob being cancelled or upon failure to clone.
    """
    
    compute_engine_target_details: Optional[ComputeEngineTargetDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeEngineTargetDetails') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[CloneJobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateTime') }})
    steps: Optional[List[CloneStep]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('steps') }})
    
