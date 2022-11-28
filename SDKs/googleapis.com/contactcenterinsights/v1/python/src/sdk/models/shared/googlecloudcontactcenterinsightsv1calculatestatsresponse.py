from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1CalculateStatsResponse:
    r"""GoogleCloudContactcenterinsightsV1CalculateStatsResponse
    The response for calculating conversation statistics.
    """
    
    average_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageDuration') }})
    average_turn_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageTurnCount') }})
    conversation_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationCount') }})
    conversation_count_time_series: Optional[GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationCountTimeSeries') }})
    custom_highlighter_matches: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customHighlighterMatches') }})
    issue_matches: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueMatches') }})
    issue_matches_stats: Optional[dict[str, GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueMatchesStats') }})
    smart_highlighter_matches: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smartHighlighterMatches') }})
    
