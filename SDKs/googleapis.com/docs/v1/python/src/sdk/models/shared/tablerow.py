from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TableRow:
    r"""TableRow
    The contents and style of a row in a Table.
    """
    
    end_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endIndex') }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startIndex') }})
    suggested_deletion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedDeletionIds') }})
    suggested_insertion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedInsertionIds') }})
    suggested_table_row_style_changes: Optional[dict[str, SuggestedTableRowStyle]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedTableRowStyleChanges') }})
    table_cells: Optional[List[TableCell]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableCells') }})
    table_row_style: Optional[TableRowStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableRowStyle') }})
    
