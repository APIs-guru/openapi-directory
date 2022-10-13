from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import colorinfo


@dataclass_json
@dataclass
class DominantColorsAnnotation:
    colors: Optional[List[colorinfo.ColorInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colors' }})
    
