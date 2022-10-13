from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import visualizationdata


@dataclass_json
@dataclass
class ScanData:
    data: Optional[visualizationdata.VisualizationData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    
