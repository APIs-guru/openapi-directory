from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import timestamp
from . import timestamp
from . import environmentdimensionvalueentry
from . import mergedresult
from . import resultsstorage
from . import shardsummary


@dataclass_json
@dataclass
class Environment:
    completion_time: Optional[timestamp.Timestamp] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completionTime' }})
    creation_time: Optional[timestamp.Timestamp] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    dimension_value: Optional[List[environmentdimensionvalueentry.EnvironmentDimensionValueEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionValue' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    environment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentId' }})
    environment_result: Optional[mergedresult.MergedResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentResult' }})
    execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionId' }})
    history_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'historyId' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    results_storage: Optional[resultsstorage.ResultsStorage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resultsStorage' }})
    shard_summaries: Optional[List[shardsummary.ShardSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shardSummaries' }})
    
