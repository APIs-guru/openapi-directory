from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PivotValueCalculatedDisplayTypeEnum(str, Enum):
    PIVOT_VALUE_CALCULATED_DISPLAY_TYPE_UNSPECIFIED = "PIVOT_VALUE_CALCULATED_DISPLAY_TYPE_UNSPECIFIED"
    PERCENT_OF_ROW_TOTAL = "PERCENT_OF_ROW_TOTAL"
    PERCENT_OF_COLUMN_TOTAL = "PERCENT_OF_COLUMN_TOTAL"
    PERCENT_OF_GRAND_TOTAL = "PERCENT_OF_GRAND_TOTAL"

class PivotValueSummarizeFunctionEnum(str, Enum):
    PIVOT_STANDARD_VALUE_FUNCTION_UNSPECIFIED = "PIVOT_STANDARD_VALUE_FUNCTION_UNSPECIFIED"
    SUM = "SUM"
    COUNTA = "COUNTA"
    COUNT = "COUNT"
    COUNTUNIQUE = "COUNTUNIQUE"
    AVERAGE = "AVERAGE"
    MAX = "MAX"
    MIN = "MIN"
    MEDIAN = "MEDIAN"
    PRODUCT = "PRODUCT"
    STDEV = "STDEV"
    STDEVP = "STDEVP"
    VAR = "VAR"
    VARP = "VARP"
    CUSTOM = "CUSTOM"


@dataclass_json
@dataclass
class PivotValue:
    r"""PivotValue
    The definition of how a value in a pivot table should be calculated.
    """
    
    calculated_display_type: Optional[PivotValueCalculatedDisplayTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calculatedDisplayType') }})
    data_source_column_reference: Optional[DataSourceColumnReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceColumnReference') }})
    formula: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formula') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source_column_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceColumnOffset') }})
    summarize_function: Optional[PivotValueSummarizeFunctionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summarizeFunction') }})
    
