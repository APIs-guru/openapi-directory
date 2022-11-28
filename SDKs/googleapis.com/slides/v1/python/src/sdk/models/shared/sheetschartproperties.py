from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SheetsChartProperties:
    r"""SheetsChartProperties
    The properties of the SheetsChart.
    """
    
    chart_image_properties: Optional[ImageProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chartImageProperties') }})
    
