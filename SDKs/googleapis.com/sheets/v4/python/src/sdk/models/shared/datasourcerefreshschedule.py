from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import datasourcerefreshdailyschedule
from . import datasourcerefreshmonthlyschedule
from . import interval
from . import datasourcerefreshweeklyschedule

class DataSourceRefreshScheduleRefreshScopeEnum(str, Enum):
    DATA_SOURCE_REFRESH_SCOPE_UNSPECIFIED = "DATA_SOURCE_REFRESH_SCOPE_UNSPECIFIED"
    ALL_DATA_SOURCES = "ALL_DATA_SOURCES"


@dataclass_json
@dataclass
class DataSourceRefreshSchedule:
    daily_schedule: Optional[datasourcerefreshdailyschedule.DataSourceRefreshDailySchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dailySchedule' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    monthly_schedule: Optional[datasourcerefreshmonthlyschedule.DataSourceRefreshMonthlySchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monthlySchedule' }})
    next_run: Optional[interval.Interval] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextRun' }})
    refresh_scope: Optional[DataSourceRefreshScheduleRefreshScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refreshScope' }})
    weekly_schedule: Optional[datasourcerefreshweeklyschedule.DataSourceRefreshWeeklySchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weeklySchedule' }})
    
