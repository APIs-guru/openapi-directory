from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EmbeddedChart:
    r"""EmbeddedChart
    A chart embedded in a sheet.
    """
    
    border: Optional[EmbeddedObjectBorder] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('border') }})
    chart_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chartId') }})
    position: Optional[EmbeddedObjectPosition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    spec: Optional[ChartSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    
