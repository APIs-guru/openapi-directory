from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alphaexecutionsnapshotexecutionsnapshotmetadata
from . import googlecloudintegrationsv1alphavaluetype
from . import googlecloudintegrationsv1alphataskexecutiondetails


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaExecutionSnapshot:
    checkpoint_task_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkpointTaskNumber' }})
    execution_snapshot_metadata: Optional[googlecloudintegrationsv1alphaexecutionsnapshotexecutionsnapshotmetadata.GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionSnapshotMetadata' }})
    params: Optional[dict[str, googlecloudintegrationsv1alphavaluetype.GoogleCloudIntegrationsV1alphaValueType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'params' }})
    task_execution_details: Optional[List[googlecloudintegrationsv1alphataskexecutiondetails.GoogleCloudIntegrationsV1alphaTaskExecutionDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskExecutionDetails' }})
    
