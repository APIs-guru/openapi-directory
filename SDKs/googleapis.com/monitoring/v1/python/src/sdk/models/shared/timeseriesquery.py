from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import timeseriesfilter
from . import timeseriesfilterratio


@dataclass_json
@dataclass
class TimeSeriesQuery:
    prometheus_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prometheusQuery' }})
    time_series_filter: Optional[timeseriesfilter.TimeSeriesFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSeriesFilter' }})
    time_series_filter_ratio: Optional[timeseriesfilterratio.TimeSeriesFilterRatio] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSeriesFilterRatio' }})
    time_series_query_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSeriesQueryLanguage' }})
    unit_override: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unitOverride' }})
    
