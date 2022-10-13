from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import ratiopart
from . import ratiopart
from . import picktimeseriesfilter
from . import aggregation
from . import statisticaltimeseriesfilter


@dataclass_json
@dataclass
class TimeSeriesFilterRatio:
    denominator: Optional[ratiopart.RatioPart] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'denominator' }})
    numerator: Optional[ratiopart.RatioPart] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numerator' }})
    pick_time_series_filter: Optional[picktimeseriesfilter.PickTimeSeriesFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickTimeSeriesFilter' }})
    secondary_aggregation: Optional[aggregation.Aggregation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondaryAggregation' }})
    statistical_time_series_filter: Optional[statisticaltimeseriesfilter.StatisticalTimeSeriesFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statisticalTimeSeriesFilter' }})
    
