from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TableDataSet:
    r"""TableDataSet
    Groups a time series query definition with table options.
    """
    
    min_alignment_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minAlignmentPeriod') }})
    table_display_options: Optional[TableDisplayOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableDisplayOptions') }})
    table_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableTemplate') }})
    time_series_query: Optional[TimeSeriesQuery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeSeriesQuery') }})
    
