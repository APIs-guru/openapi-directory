from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sentiment
from . import textspan


@dataclass_json
@dataclass
class Sentence:
    sentiment: Optional[sentiment.Sentiment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentiment' }})
    text: Optional[textspan.TextSpan] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
