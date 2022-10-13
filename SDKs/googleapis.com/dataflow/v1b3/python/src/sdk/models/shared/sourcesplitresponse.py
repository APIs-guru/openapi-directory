from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import derivedsource
from . import sourcesplitshard

class SourceSplitResponseOutcomeEnum(str, Enum):
    SOURCE_SPLIT_OUTCOME_UNKNOWN = "SOURCE_SPLIT_OUTCOME_UNKNOWN"
    SOURCE_SPLIT_OUTCOME_USE_CURRENT = "SOURCE_SPLIT_OUTCOME_USE_CURRENT"
    SOURCE_SPLIT_OUTCOME_SPLITTING_HAPPENED = "SOURCE_SPLIT_OUTCOME_SPLITTING_HAPPENED"


@dataclass_json
@dataclass
class SourceSplitResponse:
    bundles: Optional[List[derivedsource.DerivedSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bundles' }})
    outcome: Optional[SourceSplitResponseOutcomeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outcome' }})
    shards: Optional[List[sourcesplitshard.SourceSplitShard]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shards' }})
    
