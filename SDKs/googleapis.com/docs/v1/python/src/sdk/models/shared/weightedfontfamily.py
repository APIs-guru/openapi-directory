from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WeightedFontFamily:
    font_family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fontFamily' }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    
