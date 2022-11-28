from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddChartRequest:
    r"""AddChartRequest
    Adds a chart to a sheet in the spreadsheet.
    """
    
    chart: Optional[EmbeddedChart] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chart') }})
    
