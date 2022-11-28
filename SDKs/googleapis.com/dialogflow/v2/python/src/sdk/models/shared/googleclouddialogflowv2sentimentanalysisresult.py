from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2SentimentAnalysisResult:
    r"""GoogleCloudDialogflowV2SentimentAnalysisResult
    The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. For Participants.DetectIntent, it needs to be configured in DetectIntentRequest.query_params. For Participants.StreamingDetectIntent, it needs to be configured in StreamingDetectIntentRequest.query_params. And for Participants.AnalyzeContent and Participants.StreamingAnalyzeContent, it needs to be configured in ConversationProfile.human_agent_assistant_config
    """
    
    query_text_sentiment: Optional[GoogleCloudDialogflowV2Sentiment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryTextSentiment') }})
    
