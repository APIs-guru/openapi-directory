from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ScoringConfig:
    r"""ScoringConfig
    Scoring configurations for a source while processing a Search or Suggest request.
    """
    
    disable_freshness: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableFreshness') }})
    disable_personalization: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disablePersonalization') }})
    
