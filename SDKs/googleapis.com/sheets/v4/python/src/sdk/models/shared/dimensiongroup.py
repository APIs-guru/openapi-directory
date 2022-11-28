from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DimensionGroup:
    r"""DimensionGroup
    A group over an interval of rows or columns on a sheet, which can contain or be contained within other groups. A group can be collapsed or expanded as a unit on the sheet.
    """
    
    collapsed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collapsed') }})
    depth: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('depth') }})
    range: Optional[DimensionRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    
