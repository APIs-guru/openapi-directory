from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SourceSplitResponseOutcomeEnum(str, Enum):
    SOURCE_SPLIT_OUTCOME_UNKNOWN = "SOURCE_SPLIT_OUTCOME_UNKNOWN"
    SOURCE_SPLIT_OUTCOME_USE_CURRENT = "SOURCE_SPLIT_OUTCOME_USE_CURRENT"
    SOURCE_SPLIT_OUTCOME_SPLITTING_HAPPENED = "SOURCE_SPLIT_OUTCOME_SPLITTING_HAPPENED"


@dataclass_json
@dataclass
class SourceSplitResponse:
    r"""SourceSplitResponse
    The response to a SourceSplitRequest.
    """
    
    bundles: Optional[List[DerivedSource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundles') }})
    outcome: Optional[SourceSplitResponseOutcomeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outcome') }})
    shards: Optional[List[SourceSplitShard]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shards') }})
    
