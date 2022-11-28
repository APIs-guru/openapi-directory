from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GridProperties:
    r"""GridProperties
    Properties of a grid.
    """
    
    column_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnCount') }})
    column_group_control_after: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnGroupControlAfter') }})
    frozen_column_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frozenColumnCount') }})
    frozen_row_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frozenRowCount') }})
    hide_gridlines: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hideGridlines') }})
    row_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowCount') }})
    row_group_control_after: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowGroupControlAfter') }})
    
