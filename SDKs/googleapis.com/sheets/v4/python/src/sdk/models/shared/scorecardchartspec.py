from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ScorecardChartSpecAggregateTypeEnum(str, Enum):
    CHART_AGGREGATE_TYPE_UNSPECIFIED = "CHART_AGGREGATE_TYPE_UNSPECIFIED"
    AVERAGE = "AVERAGE"
    COUNT = "COUNT"
    MAX = "MAX"
    MEDIAN = "MEDIAN"
    MIN = "MIN"
    SUM = "SUM"

class ScorecardChartSpecNumberFormatSourceEnum(str, Enum):
    CHART_NUMBER_FORMAT_SOURCE_UNDEFINED = "CHART_NUMBER_FORMAT_SOURCE_UNDEFINED"
    FROM_DATA = "FROM_DATA"
    CUSTOM = "CUSTOM"


@dataclass_json
@dataclass
class ScorecardChartSpec:
    r"""ScorecardChartSpec
    A scorecard chart. Scorecard charts are used to highlight key performance indicators, known as KPIs, on the spreadsheet. A scorecard chart can represent things like total sales, average cost, or a top selling item. You can specify a single data value, or aggregate over a range of data. Percentage or absolute difference from a baseline value can be highlighted, like changes over time.
    """
    
    aggregate_type: Optional[ScorecardChartSpecAggregateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregateType') }})
    baseline_value_data: Optional[ChartData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baselineValueData') }})
    baseline_value_format: Optional[BaselineValueFormat] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baselineValueFormat') }})
    custom_format_options: Optional[ChartCustomNumberFormatOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFormatOptions') }})
    key_value_data: Optional[ChartData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyValueData') }})
    key_value_format: Optional[KeyValueFormat] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyValueFormat') }})
    number_format_source: Optional[ScorecardChartSpecNumberFormatSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberFormatSource') }})
    scale_factor: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaleFactor') }})
    
