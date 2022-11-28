from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1SentimentAnalysisResult:
    r"""GoogleCloudDialogflowCxV3beta1SentimentAnalysisResult
    The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral.
    """
    
    magnitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('magnitude') }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    
