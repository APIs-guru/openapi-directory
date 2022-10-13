from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import score


@dataclass_json
@dataclass
class SpanScore:
    begin: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'begin' }})
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    score: Optional[score.Score] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    
