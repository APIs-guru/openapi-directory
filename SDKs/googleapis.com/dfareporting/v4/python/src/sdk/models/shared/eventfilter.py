from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EventFilter:
    r"""EventFilter
    Represents a DfaReporting event filter.
    """
    
    dimension_filter: Optional[PathReportDimensionValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionFilter') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    uvar_filter: Optional[UvarFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uvarFilter') }})
    
