from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AnalyzeSentimentResponse:
    r"""AnalyzeSentimentResponse
    The sentiment analysis response message.
    """
    
    document_sentiment: Optional[Sentiment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentSentiment') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    sentences: Optional[List[Sentence]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentences') }})
    
