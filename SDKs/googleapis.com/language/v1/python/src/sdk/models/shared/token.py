from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dependencyedge
from . import partofspeech
from . import textspan


@dataclass_json
@dataclass
class Token:
    dependency_edge: Optional[dependencyedge.DependencyEdge] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dependencyEdge' }})
    lemma: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lemma' }})
    part_of_speech: Optional[partofspeech.PartOfSpeech] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partOfSpeech' }})
    text: Optional[textspan.TextSpan] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
