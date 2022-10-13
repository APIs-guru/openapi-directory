from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SizeSuggestionState:
    height_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'heightSuggested' }})
    width_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'widthSuggested' }})
    
