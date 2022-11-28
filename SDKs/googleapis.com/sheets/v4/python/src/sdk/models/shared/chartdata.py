from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""ChartData
    The data included in a domain or series.
    """
    
    aggregate_type: Optional[ChartDataAggregateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregateType') }})
    column_reference: Optional[DataSourceColumnReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnReference') }})
    group_rule: Optional[ChartGroupRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupRule') }})
    source_range: Optional[ChartSourceRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceRange') }})
    
