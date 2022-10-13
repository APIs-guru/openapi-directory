from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tablebordercell


@dataclass_json
@dataclass
class TableBorderRow:
    table_border_cells: Optional[List[tablebordercell.TableBorderCell]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableBorderCells' }})
    
