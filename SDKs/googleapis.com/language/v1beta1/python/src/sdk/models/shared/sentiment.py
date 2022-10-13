from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Sentiment:
    magnitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'magnitude' }})
    polarity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'polarity' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    
