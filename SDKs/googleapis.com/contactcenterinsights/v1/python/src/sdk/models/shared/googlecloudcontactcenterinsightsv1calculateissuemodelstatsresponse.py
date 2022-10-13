from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudcontactcenterinsightsv1issuemodellabelstats


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse:
    current_stats: Optional[googlecloudcontactcenterinsightsv1issuemodellabelstats.GoogleCloudContactcenterinsightsV1IssueModelLabelStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentStats' }})
    
