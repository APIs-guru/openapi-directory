from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class WaterfallChartSpecStackedTypeEnum(str, Enum):
    WATERFALL_STACKED_TYPE_UNSPECIFIED = "WATERFALL_STACKED_TYPE_UNSPECIFIED"
    STACKED = "STACKED"
    SEQUENTIAL = "SEQUENTIAL"


@dataclass_json
@dataclass
class WaterfallChartSpec:
    r"""WaterfallChartSpec
    A waterfall chart.
    """
    
    connector_line_style: Optional[LineStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectorLineStyle') }})
    domain: Optional[WaterfallChartDomain] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    first_value_is_total: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstValueIsTotal') }})
    hide_connector_lines: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hideConnectorLines') }})
    series: Optional[List[WaterfallChartSeries]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('series') }})
    stacked_type: Optional[WaterfallChartSpecStackedTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stackedType') }})
    total_data_label: Optional[DataLabel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalDataLabel') }})
    
