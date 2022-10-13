from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import themecolorpair


@dataclass_json
@dataclass
class ColorScheme:
    colors: Optional[List[themecolorpair.ThemeColorPair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colors' }})
    
