from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import sentencedependencyout


@dataclass_json
@dataclass
class SentenceDependenciesOut:
    sentence_dependencies: List[sentencedependencyout.SentenceDependencyOut] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentence_dependencies' }})
    
