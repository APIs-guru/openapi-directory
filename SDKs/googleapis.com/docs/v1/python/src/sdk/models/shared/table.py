from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Table:
    r"""Table
    A StructuralElement representing a table.
    """
    
    columns: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    suggested_deletion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedDeletionIds') }})
    suggested_insertion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedInsertionIds') }})
    table_rows: Optional[List[TableRow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableRows') }})
    table_style: Optional[TableStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableStyle') }})
    
