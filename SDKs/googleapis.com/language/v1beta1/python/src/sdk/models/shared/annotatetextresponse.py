from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sentiment
from . import entity
from . import sentence
from . import token


@dataclass_json
@dataclass
class AnnotateTextResponse:
    document_sentiment: Optional[sentiment.Sentiment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentSentiment' }})
    entities: Optional[List[entity.Entity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entities' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    sentences: Optional[List[sentence.Sentence]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentences' }})
    tokens: Optional[List[token.Token]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokens' }})
    
