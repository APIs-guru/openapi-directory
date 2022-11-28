from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SparkChartViewSparkChartTypeEnum(str, Enum):
    SPARK_CHART_TYPE_UNSPECIFIED = "SPARK_CHART_TYPE_UNSPECIFIED"
    SPARK_LINE = "SPARK_LINE"
    SPARK_BAR = "SPARK_BAR"


@dataclass_json
@dataclass
class SparkChartView:
    r"""SparkChartView
    A sparkChart is a small chart suitable for inclusion in a table-cell or inline in text. This message contains the configuration for a sparkChart to show up on a Scorecard, showing recent trends of the scorecard's timeseries.
    """
    
    min_alignment_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minAlignmentPeriod') }})
    spark_chart_type: Optional[SparkChartViewSparkChartTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkChartType') }})
    
