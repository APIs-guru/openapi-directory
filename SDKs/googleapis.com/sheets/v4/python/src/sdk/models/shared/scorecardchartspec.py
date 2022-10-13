from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import chartdata
from . import baselinevalueformat
from . import chartcustomnumberformatoptions
from . import chartdata
from . import keyvalueformat

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
    aggregate_type: Optional[ScorecardChartSpecAggregateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregateType' }})
    baseline_value_data: Optional[chartdata.ChartData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baselineValueData' }})
    baseline_value_format: Optional[baselinevalueformat.BaselineValueFormat] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baselineValueFormat' }})
    custom_format_options: Optional[chartcustomnumberformatoptions.ChartCustomNumberFormatOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customFormatOptions' }})
    key_value_data: Optional[chartdata.ChartData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyValueData' }})
    key_value_format: Optional[keyvalueformat.KeyValueFormat] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyValueFormat' }})
    number_format_source: Optional[ScorecardChartSpecNumberFormatSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberFormatSource' }})
    scale_factor: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaleFactor' }})
    
