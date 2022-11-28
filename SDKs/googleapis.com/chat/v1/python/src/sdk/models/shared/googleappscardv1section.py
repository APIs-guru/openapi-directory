from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsCardV1Section:
    r"""GoogleAppsCardV1Section
    A section contains a collection of widgets that are rendered vertically in the order that they are specified.
    """
    
    collapsible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collapsible') }})
    header: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    uncollapsible_widgets_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uncollapsibleWidgetsCount') }})
    widgets: Optional[List[GoogleAppsCardV1Widget]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('widgets') }})
    
