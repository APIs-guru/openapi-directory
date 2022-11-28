from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DataSourceRefreshScheduleRefreshScopeEnum(str, Enum):
    DATA_SOURCE_REFRESH_SCOPE_UNSPECIFIED = "DATA_SOURCE_REFRESH_SCOPE_UNSPECIFIED"
    ALL_DATA_SOURCES = "ALL_DATA_SOURCES"


@dataclass_json
@dataclass
class DataSourceRefreshSchedule:
    r"""DataSourceRefreshSchedule
    Schedule for refreshing the data source. Data sources in the spreadsheet are refreshed within a time interval. You can specify the start time by clicking the Scheduled Refresh button in the Sheets editor, but the interval is fixed at 4 hours. For example, if you specify a start time of 8am , the refresh will take place between 8am and 12pm every day.
    """
    
    daily_schedule: Optional[DataSourceRefreshDailySchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dailySchedule') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    monthly_schedule: Optional[DataSourceRefreshMonthlySchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthlySchedule') }})
    next_run: Optional[Interval] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextRun') }})
    refresh_scope: Optional[DataSourceRefreshScheduleRefreshScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refreshScope') }})
    weekly_schedule: Optional[DataSourceRefreshWeeklySchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weeklySchedule') }})
    
