from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import colorscheme
from . import pagebackgroundfill


@dataclass_json
@dataclass
class PageProperties:
    color_scheme: Optional[colorscheme.ColorScheme] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colorScheme' }})
    page_background_fill: Optional[pagebackgroundfill.PageBackgroundFill] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageBackgroundFill' }})
    
