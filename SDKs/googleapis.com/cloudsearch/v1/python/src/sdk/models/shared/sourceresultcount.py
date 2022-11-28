from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceResultCount:
    r"""SourceResultCount
    Per source result count information.
    """
    
    has_more_results: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasMoreResults') }})
    result_count_estimate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resultCountEstimate') }})
    result_count_exact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resultCountExact') }})
    source: Optional[Source] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
