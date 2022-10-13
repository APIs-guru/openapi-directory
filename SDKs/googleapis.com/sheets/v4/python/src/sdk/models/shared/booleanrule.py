from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import booleancondition
from . import cellformat


@dataclass_json
@dataclass
class BooleanRule:
    condition: Optional[booleancondition.BooleanCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    format: Optional[cellformat.CellFormat] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    
