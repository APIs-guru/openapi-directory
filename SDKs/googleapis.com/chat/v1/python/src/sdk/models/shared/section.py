from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Section:
    r"""Section
    A section contains a collection of widgets that are rendered (vertically) in the order that they are specified. Across all platforms, cards have a narrow fixed width, so there is currently no need for layout properties (e.g. float).
    """
    
    header: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    widgets: Optional[List[WidgetMarkup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('widgets') }})
    
