from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import expressionreport
from . import sourceposition
from . import valuecount


@dataclass_json
@dataclass
class ExpressionReport:
    children: Optional[List[expressionreport.ExpressionReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'children' }})
    source_position: Optional[sourceposition.SourcePosition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourcePosition' }})
    values: Optional[List[valuecount.ValueCount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
