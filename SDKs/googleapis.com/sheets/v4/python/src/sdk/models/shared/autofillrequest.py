from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AutoFillRequest:
    r"""AutoFillRequest
    Fills in more data based on existing data.
    """
    
    range: Optional[GridRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    source_and_destination: Optional[SourceAndDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceAndDestination') }})
    use_alternate_series: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useAlternateSeries') }})
    
