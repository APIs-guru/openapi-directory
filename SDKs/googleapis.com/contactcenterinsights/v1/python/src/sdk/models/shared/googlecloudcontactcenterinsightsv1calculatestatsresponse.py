from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudcontactcenterinsightsv1calculatestatsresponsetimeseries
from . import googlecloudcontactcenterinsightsv1issuemodellabelstatsissuestats


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1CalculateStatsResponse:
    average_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'averageDuration' }})
    average_turn_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'averageTurnCount' }})
    conversation_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversationCount' }})
    conversation_count_time_series: Optional[googlecloudcontactcenterinsightsv1calculatestatsresponsetimeseries.GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversationCountTimeSeries' }})
    custom_highlighter_matches: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customHighlighterMatches' }})
    issue_matches: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issueMatches' }})
    issue_matches_stats: Optional[dict[str, googlecloudcontactcenterinsightsv1issuemodellabelstatsissuestats.GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issueMatchesStats' }})
    smart_highlighter_matches: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smartHighlighterMatches' }})
    
