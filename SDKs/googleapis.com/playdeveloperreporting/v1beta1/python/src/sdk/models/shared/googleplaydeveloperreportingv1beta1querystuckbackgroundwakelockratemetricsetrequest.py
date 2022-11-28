from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest:
    r"""GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest
    Request message for QueryStuckBackgroundWakelockRateMetricSet.
    """
    
    dimensions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    metrics: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    timeline_spec: Optional[GooglePlayDeveloperReportingV1beta1TimelineSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timelineSpec') }})
    
