from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata:
    r"""GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata
    Call-specific metadata created during analysis.
    """
    
    annotations: Optional[List[GoogleCloudContactcenterinsightsV1CallAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    entities: Optional[dict[str, GoogleCloudContactcenterinsightsV1Entity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entities') }})
    intents: Optional[dict[str, GoogleCloudContactcenterinsightsV1Intent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intents') }})
    issue_model_result: Optional[GoogleCloudContactcenterinsightsV1IssueModelResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueModelResult') }})
    phrase_matchers: Optional[dict[str, GoogleCloudContactcenterinsightsV1PhraseMatchData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phraseMatchers') }})
    sentiments: Optional[List[GoogleCloudContactcenterinsightsV1ConversationLevelSentiment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentiments') }})
    
