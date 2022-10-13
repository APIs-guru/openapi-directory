from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import outlierresponse


@dataclass_json
@dataclass
class TimeSeriesOutliersResponse:
    outliers: Optional[List[outlierresponse.OutlierResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outliers' }})
    time_series_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSeriesId' }})
    
