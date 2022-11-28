from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class QueryInterpretationOptions:
    r"""QueryInterpretationOptions
    Options to interpret user query.
    """
    
    disable_nl_interpretation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableNlInterpretation') }})
    disable_supplemental_results: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableSupplementalResults') }})
    enable_verbatim_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableVerbatimMode') }})
    
