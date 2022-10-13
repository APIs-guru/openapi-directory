from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import imageproperties


@dataclass_json
@dataclass
class SheetsChartProperties:
    chart_image_properties: Optional[imageproperties.ImageProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chartImageProperties' }})
    
