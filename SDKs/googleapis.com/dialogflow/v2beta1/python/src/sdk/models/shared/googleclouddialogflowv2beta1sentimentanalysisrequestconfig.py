from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig:
    r"""GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig
    Configures the types of sentiment analysis to perform.
    """
    
    analyze_query_text_sentiment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyzeQueryTextSentiment') }})
    
