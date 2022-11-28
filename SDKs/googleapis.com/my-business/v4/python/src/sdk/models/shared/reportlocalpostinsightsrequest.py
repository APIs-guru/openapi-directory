from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportLocalPostInsightsRequest:
    r"""ReportLocalPostInsightsRequest
    Request message for Insights.ReportLocalPostInsights
    """
    
    basic_request: Optional[BasicMetricsRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicRequest') }})
    local_post_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localPostNames') }})
    
