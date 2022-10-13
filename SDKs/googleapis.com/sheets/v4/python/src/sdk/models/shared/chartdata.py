from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import datasourcecolumnreference
from . import chartgrouprule
from . import chartsourcerange

class ChartDataAggregateTypeEnum(str, Enum):
    CHART_AGGREGATE_TYPE_UNSPECIFIED = "CHART_AGGREGATE_TYPE_UNSPECIFIED"
    AVERAGE = "AVERAGE"
    COUNT = "COUNT"
    MAX = "MAX"
    MEDIAN = "MEDIAN"
    MIN = "MIN"
    SUM = "SUM"


@dataclass_json
@dataclass
class ChartData:
    aggregate_type: Optional[ChartDataAggregateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregateType' }})
    column_reference: Optional[datasourcecolumnreference.DataSourceColumnReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnReference' }})
    group_rule: Optional[chartgrouprule.ChartGroupRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupRule' }})
    source_range: Optional[chartsourcerange.ChartSourceRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceRange' }})
    
