from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse:
    r"""GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse
    Response of querying an issue model's statistics.
    """
    
    current_stats: Optional[GoogleCloudContactcenterinsightsV1IssueModelLabelStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentStats') }})
    
