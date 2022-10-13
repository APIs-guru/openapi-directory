from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmeventbusprotoconditionresult
from . import enterprisecrmeventbusprotoeventparameters
from . import enterprisecrmeventbusprotoeventexecutionsnapshoteventexecutionsnapshotmetadata
from . import enterprisecrmeventbusprotoeventparameters
from . import enterprisecrmeventbusprototaskexecutiondetails


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoEventExecutionSnapshot:
    checkpoint_task_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkpointTaskNumber' }})
    condition_results: Optional[List[enterprisecrmeventbusprotoconditionresult.EnterpriseCrmEventbusProtoConditionResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditionResults' }})
    diff_params: Optional[enterprisecrmeventbusprotoeventparameters.EnterpriseCrmEventbusProtoEventParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diffParams' }})
    event_execution_info_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventExecutionInfoId' }})
    event_execution_snapshot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventExecutionSnapshotId' }})
    event_execution_snapshot_metadata: Optional[enterprisecrmeventbusprotoeventexecutionsnapshoteventexecutionsnapshotmetadata.EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventExecutionSnapshotMetadata' }})
    event_params: Optional[enterprisecrmeventbusprotoeventparameters.EnterpriseCrmEventbusProtoEventParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventParams' }})
    exceed_max_size: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exceedMaxSize' }})
    snapshot_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshotTime' }})
    task_execution_details: Optional[List[enterprisecrmeventbusprototaskexecutiondetails.EnterpriseCrmEventbusProtoTaskExecutionDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskExecutionDetails' }})
    task_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskName' }})
    
