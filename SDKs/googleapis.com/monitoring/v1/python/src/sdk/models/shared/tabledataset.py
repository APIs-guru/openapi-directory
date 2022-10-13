from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import timeseriesquery


@dataclass_json
@dataclass
class TableDataSet:
    min_alignment_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minAlignmentPeriod' }})
    table_display_options: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableDisplayOptions' }})
    table_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableTemplate' }})
    time_series_query: Optional[timeseriesquery.TimeSeriesQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSeriesQuery' }})
    
