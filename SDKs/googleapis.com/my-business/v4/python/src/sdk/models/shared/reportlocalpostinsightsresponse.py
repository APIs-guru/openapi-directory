from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportLocalPostInsightsResponse:
    r"""ReportLocalPostInsightsResponse
    Response message for Insights.ReportLocalPostInsights
    """
    
    local_post_metrics: Optional[List[LocalPostMetrics]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localPostMetrics') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    
