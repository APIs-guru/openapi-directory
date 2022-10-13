from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tableborderrow
from . import tablecolumnproperties
from . import tablerow
from . import tableborderrow


@dataclass_json
@dataclass
class Table:
    columns: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columns' }})
    horizontal_border_rows: Optional[List[tableborderrow.TableBorderRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'horizontalBorderRows' }})
    rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    table_columns: Optional[List[tablecolumnproperties.TableColumnProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableColumns' }})
    table_rows: Optional[List[tablerow.TableRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableRows' }})
    vertical_border_rows: Optional[List[tableborderrow.TableBorderRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verticalBorderRows' }})
    
