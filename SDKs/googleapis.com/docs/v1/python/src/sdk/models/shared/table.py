from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tablerow
from . import tablestyle


@dataclass_json
@dataclass
class Table:
    columns: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columns' }})
    rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    suggested_deletion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedDeletionIds' }})
    suggested_insertion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedInsertionIds' }})
    table_rows: Optional[List[tablerow.TableRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableRows' }})
    table_style: Optional[tablestyle.TableStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableStyle' }})
    
