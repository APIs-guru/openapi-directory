from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse:
    r"""GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse
    Response message for QueryStuckBackgroundWakelockRateMetricSet.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    rows: Optional[List[GooglePlayDeveloperReportingV1alpha1MetricsRow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    
