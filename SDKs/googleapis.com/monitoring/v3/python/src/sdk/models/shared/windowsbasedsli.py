from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import performancethreshold
from . import metricrange
from . import metricrange


@dataclass_json
@dataclass
class WindowsBasedSli:
    good_bad_metric_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goodBadMetricFilter' }})
    good_total_ratio_threshold: Optional[performancethreshold.PerformanceThreshold] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goodTotalRatioThreshold' }})
    metric_mean_in_range: Optional[metricrange.MetricRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricMeanInRange' }})
    metric_sum_in_range: Optional[metricrange.MetricRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricSumInRange' }})
    window_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'windowPeriod' }})
    
