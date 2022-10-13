from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sentiment
from . import sentence


@dataclass_json
@dataclass
class AnalyzeSentimentResponse:
    document_sentiment: Optional[sentiment.Sentiment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentSentiment' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    sentences: Optional[List[sentence.Sentence]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentences' }})
    
