from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class QueryInterpretationConfig:
    r"""QueryInterpretationConfig
    Default options to interpret user query.
    """
    
    force_disable_supplemental_results: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forceDisableSupplementalResults') }})
    force_verbatim_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forceVerbatimMode') }})
    
