from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import dependenciesout


@dataclass_json
@dataclass
class SentenceDependencyOut:
    dependencies: dependenciesout.DependenciesOut = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dependencies' }})
    sentence: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentence' }})
    
