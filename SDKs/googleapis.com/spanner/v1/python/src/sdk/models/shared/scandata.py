from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScanData:
    r"""ScanData
    ScanData contains Cloud Key Visualizer scan data used by the caller to construct a visualization.
    """
    
    data: Optional[VisualizationData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    
