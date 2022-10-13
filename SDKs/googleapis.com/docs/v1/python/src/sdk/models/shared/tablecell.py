from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import structuralelement
from . import suggestedtablecellstyle
from . import tablecellstyle


@dataclass_json
@dataclass
class TableCell:
    content: Optional[List[structuralelement.StructuralElement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    end_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endIndex' }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startIndex' }})
    suggested_deletion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedDeletionIds' }})
    suggested_insertion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedInsertionIds' }})
    suggested_table_cell_style_changes: Optional[dict[str, suggestedtablecellstyle.SuggestedTableCellStyle]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedTableCellStyleChanges' }})
    table_cell_style: Optional[tablecellstyle.TableCellStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableCellStyle' }})
    
