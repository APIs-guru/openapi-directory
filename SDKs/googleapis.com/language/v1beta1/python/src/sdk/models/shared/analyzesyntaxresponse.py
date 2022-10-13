from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sentence
from . import token


@dataclass_json
@dataclass
class AnalyzeSyntaxResponse:
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    sentences: Optional[List[sentence.Sentence]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentences' }})
    tokens: Optional[List[token.Token]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokens' }})
    
