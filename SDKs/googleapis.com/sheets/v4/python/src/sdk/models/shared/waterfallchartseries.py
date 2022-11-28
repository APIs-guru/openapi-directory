from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WaterfallChartSeries:
    r"""WaterfallChartSeries
    A single series of data for a waterfall chart.
    """
    
    custom_subtotals: Optional[List[WaterfallChartCustomSubtotal]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customSubtotals') }})
    data: Optional[ChartData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    data_label: Optional[DataLabel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataLabel') }})
    hide_trailing_subtotal: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hideTrailingSubtotal') }})
    negative_columns_style: Optional[WaterfallChartColumnStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negativeColumnsStyle') }})
    positive_columns_style: Optional[WaterfallChartColumnStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('positiveColumnsStyle') }})
    subtotal_columns_style: Optional[WaterfallChartColumnStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtotalColumnsStyle') }})
    
