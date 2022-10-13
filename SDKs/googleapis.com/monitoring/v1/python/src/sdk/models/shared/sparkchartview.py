from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SparkChartViewSparkChartTypeEnum(str, Enum):
    SPARK_CHART_TYPE_UNSPECIFIED = "SPARK_CHART_TYPE_UNSPECIFIED"
    SPARK_LINE = "SPARK_LINE"
    SPARK_BAR = "SPARK_BAR"


@dataclass_json
@dataclass
class SparkChartView:
    min_alignment_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minAlignmentPeriod' }})
    spark_chart_type: Optional[SparkChartViewSparkChartTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sparkChartType' }})
    
