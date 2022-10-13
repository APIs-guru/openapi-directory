from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ImageTagPrediction:
    probability: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Probability' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tag' }})
    tag_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagId' }})
    
