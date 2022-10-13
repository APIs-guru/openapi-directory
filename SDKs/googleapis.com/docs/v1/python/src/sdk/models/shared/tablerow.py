from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import suggestedtablerowstyle
from . import tablecell
from . import tablerowstyle


@dataclass_json
@dataclass
class TableRow:
    end_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endIndex' }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startIndex' }})
    suggested_deletion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedDeletionIds' }})
    suggested_insertion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedInsertionIds' }})
    suggested_table_row_style_changes: Optional[dict[str, suggestedtablerowstyle.SuggestedTableRowStyle]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedTableRowStyleChanges' }})
    table_cells: Optional[List[tablecell.TableCell]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableCells' }})
    table_row_style: Optional[tablerowstyle.TableRowStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableRowStyle' }})
    
