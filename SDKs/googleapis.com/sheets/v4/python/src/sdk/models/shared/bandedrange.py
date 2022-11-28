from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BandedRange:
    r"""BandedRange
    A banded (alternating colors) range in a sheet.
    """
    
    banded_range_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandedRangeId') }})
    column_properties: Optional[BandingProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnProperties') }})
    range: Optional[GridRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    row_properties: Optional[BandingProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowProperties') }})
    
