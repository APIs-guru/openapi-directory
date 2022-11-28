from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceConfig:
    r"""SourceConfig
    Configurations for a source while processing a Search or Suggest request.
    """
    
    crowding_config: Optional[SourceCrowdingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crowdingConfig') }})
    scoring_config: Optional[SourceScoringConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoringConfig') }})
    source: Optional[Source] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
