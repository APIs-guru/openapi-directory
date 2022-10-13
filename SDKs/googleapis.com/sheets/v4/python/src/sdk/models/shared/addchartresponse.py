from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import embeddedchart


@dataclass_json
@dataclass
class AddChartResponse:
    chart: Optional[embeddedchart.EmbeddedChart] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chart' }})
    
