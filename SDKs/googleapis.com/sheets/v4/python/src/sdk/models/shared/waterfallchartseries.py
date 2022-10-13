from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import waterfallchartcustomsubtotal
from . import chartdata
from . import datalabel
from . import waterfallchartcolumnstyle
from . import waterfallchartcolumnstyle
from . import waterfallchartcolumnstyle


@dataclass_json
@dataclass
class WaterfallChartSeries:
    custom_subtotals: Optional[List[waterfallchartcustomsubtotal.WaterfallChartCustomSubtotal]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customSubtotals' }})
    data: Optional[chartdata.ChartData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    data_label: Optional[datalabel.DataLabel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataLabel' }})
    hide_trailing_subtotal: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hideTrailingSubtotal' }})
    negative_columns_style: Optional[waterfallchartcolumnstyle.WaterfallChartColumnStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'negativeColumnsStyle' }})
    positive_columns_style: Optional[waterfallchartcolumnstyle.WaterfallChartColumnStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'positiveColumnsStyle' }})
    subtotal_columns_style: Optional[waterfallchartcolumnstyle.WaterfallChartColumnStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtotalColumnsStyle' }})
    
