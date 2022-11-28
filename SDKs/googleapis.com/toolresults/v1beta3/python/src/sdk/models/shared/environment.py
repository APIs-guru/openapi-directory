from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Environment:
    r"""Environment
    An Environment represents the set of test runs (Steps) from the parent Execution that are configured with the same set of dimensions (Model, Version, Locale, and Orientation). Multiple such runs occur particularly because of features like sharding (splitting up a test suite to run in parallel across devices) and reruns (running a test multiple times to check for different outcomes).
    """
    
    completion_time: Optional[Timestamp] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completionTime') }})
    creation_time: Optional[Timestamp] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime') }})
    dimension_value: Optional[List[EnvironmentDimensionValueEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionValue') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    environment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentId') }})
    environment_result: Optional[MergedResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentResult') }})
    execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionId') }})
    history_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('historyId') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    results_storage: Optional[ResultsStorage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resultsStorage') }})
    shard_summaries: Optional[List[ShardSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shardSummaries') }})
    
