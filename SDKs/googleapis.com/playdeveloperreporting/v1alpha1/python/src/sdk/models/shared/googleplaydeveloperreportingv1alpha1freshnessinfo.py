from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePlayDeveloperReportingV1alpha1FreshnessInfo:
    r"""GooglePlayDeveloperReportingV1alpha1FreshnessInfo
    Represents the latest available time that can be requested in a TimelineSpec. Different aggregation periods have different freshness. For example, `DAILY` aggregation may lag behind `HOURLY` in cases where such aggregation is computed only once at the end of the day.
    """
    
    freshnesses: Optional[List[GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshness]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freshnesses') }})
    
