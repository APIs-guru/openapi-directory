from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SpreadsheetTheme:
    r"""SpreadsheetTheme
    Represents spreadsheet theme
    """
    
    primary_font_family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryFontFamily') }})
    theme_colors: Optional[List[ThemeColorPair]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('themeColors') }})
    
