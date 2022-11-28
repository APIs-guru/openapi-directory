from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaExecutionSnapshot:
    r"""GoogleCloudIntegrationsV1alphaExecutionSnapshot
    Contains the snapshot of the execution for a given checkpoint.
    """
    
    checkpoint_task_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkpointTaskNumber') }})
    execution_snapshot_metadata: Optional[GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionSnapshotMetadata') }})
    params: Optional[dict[str, GoogleCloudIntegrationsV1alphaValueType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('params') }})
    task_execution_details: Optional[List[GoogleCloudIntegrationsV1alphaTaskExecutionDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskExecutionDetails') }})
    
