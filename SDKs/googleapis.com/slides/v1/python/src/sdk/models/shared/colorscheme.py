from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ColorScheme:
    r"""ColorScheme
    The palette of predefined colors for a page.
    """
    
    colors: Optional[List[ThemeColorPair]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colors') }})
    
