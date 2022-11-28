from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class QueryResultBatchEntityResultTypeEnum(str, Enum):
    RESULT_TYPE_UNSPECIFIED = "RESULT_TYPE_UNSPECIFIED"
    FULL = "FULL"
    PROJECTION = "PROJECTION"
    KEY_ONLY = "KEY_ONLY"

class QueryResultBatchMoreResultsEnum(str, Enum):
    MORE_RESULTS_TYPE_UNSPECIFIED = "MORE_RESULTS_TYPE_UNSPECIFIED"
    NOT_FINISHED = "NOT_FINISHED"
    MORE_RESULTS_AFTER_LIMIT = "MORE_RESULTS_AFTER_LIMIT"
    MORE_RESULTS_AFTER_CURSOR = "MORE_RESULTS_AFTER_CURSOR"
    NO_MORE_RESULTS = "NO_MORE_RESULTS"


@dataclass_json
@dataclass
class QueryResultBatch:
    r"""QueryResultBatch
    A batch of results produced by a query.
    """
    
    end_cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endCursor') }})
    entity_result_type: Optional[QueryResultBatchEntityResultTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityResultType') }})
    entity_results: Optional[List[EntityResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityResults') }})
    more_results: Optional[QueryResultBatchMoreResultsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moreResults') }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readTime') }})
    skipped_cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skippedCursor') }})
    skipped_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skippedResults') }})
    snapshot_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshotVersion') }})
    
