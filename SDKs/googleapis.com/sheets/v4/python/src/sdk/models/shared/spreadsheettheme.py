from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import themecolorpair


@dataclass_json
@dataclass
class SpreadsheetTheme:
    primary_font_family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryFontFamily' }})
    theme_colors: Optional[List[themecolorpair.ThemeColorPair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'themeColors' }})
    
