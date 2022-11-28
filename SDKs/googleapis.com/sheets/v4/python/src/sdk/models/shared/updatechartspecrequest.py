from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateChartSpecRequest:
    r"""UpdateChartSpecRequest
    Updates a chart's specifications. (This does not move or resize a chart. To move or resize a chart, use UpdateEmbeddedObjectPositionRequest.)
    """
    
    chart_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chartId') }})
    spec: Optional[ChartSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    
