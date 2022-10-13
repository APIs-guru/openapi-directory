from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import linestyle
from . import waterfallchartdomain
from . import waterfallchartseries
from . import datalabel

class WaterfallChartSpecStackedTypeEnum(str, Enum):
    WATERFALL_STACKED_TYPE_UNSPECIFIED = "WATERFALL_STACKED_TYPE_UNSPECIFIED"
    STACKED = "STACKED"
    SEQUENTIAL = "SEQUENTIAL"


@dataclass_json
@dataclass
class WaterfallChartSpec:
    connector_line_style: Optional[linestyle.LineStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorLineStyle' }})
    domain: Optional[waterfallchartdomain.WaterfallChartDomain] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    first_value_is_total: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstValueIsTotal' }})
    hide_connector_lines: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hideConnectorLines' }})
    series: Optional[List[waterfallchartseries.WaterfallChartSeries]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'series' }})
    stacked_type: Optional[WaterfallChartSpecStackedTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stackedType' }})
    total_data_label: Optional[datalabel.DataLabel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalDataLabel' }})
    
