from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1CallAnnotation:
    r"""GoogleCloudContactcenterinsightsV1CallAnnotation
    A piece of metadata that applies to a window of a call.
    """
    
    annotation_end_boundary: Optional[GoogleCloudContactcenterinsightsV1AnnotationBoundary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationEndBoundary') }})
    annotation_start_boundary: Optional[GoogleCloudContactcenterinsightsV1AnnotationBoundary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationStartBoundary') }})
    channel_tag: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelTag') }})
    entity_mention_data: Optional[GoogleCloudContactcenterinsightsV1EntityMentionData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityMentionData') }})
    hold_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holdData') }})
    intent_match_data: Optional[GoogleCloudContactcenterinsightsV1IntentMatchData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentMatchData') }})
    interruption_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interruptionData') }})
    issue_match_data: Optional[GoogleCloudContactcenterinsightsV1IssueMatchData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueMatchData') }})
    phrase_match_data: Optional[GoogleCloudContactcenterinsightsV1PhraseMatchData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phraseMatchData') }})
    sentiment_data: Optional[GoogleCloudContactcenterinsightsV1SentimentData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentimentData') }})
    silence_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('silenceData') }})
    
