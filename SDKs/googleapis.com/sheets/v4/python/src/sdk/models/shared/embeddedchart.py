from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import embeddedobjectborder
from . import embeddedobjectposition
from . import chartspec


@dataclass_json
@dataclass
class EmbeddedChart:
    border: Optional[embeddedobjectborder.EmbeddedObjectBorder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'border' }})
    chart_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chartId' }})
    position: Optional[embeddedobjectposition.EmbeddedObjectPosition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    spec: Optional[chartspec.ChartSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    
