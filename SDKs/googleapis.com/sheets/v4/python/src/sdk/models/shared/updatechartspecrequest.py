from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import chartspec


@dataclass_json
@dataclass
class UpdateChartSpecRequest:
    chart_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chartId' }})
    spec: Optional[chartspec.ChartSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    
