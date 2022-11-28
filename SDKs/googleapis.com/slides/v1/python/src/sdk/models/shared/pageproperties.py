from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PageProperties:
    r"""PageProperties
    The properties of the Page. The page will inherit properties from the parent page. Depending on the page type the hierarchy is defined in either SlideProperties or LayoutProperties.
    """
    
    color_scheme: Optional[ColorScheme] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorScheme') }})
    page_background_fill: Optional[PageBackgroundFill] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageBackgroundFill') }})
    
