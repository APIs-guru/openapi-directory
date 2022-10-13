from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import structtype
from . import transaction
from . import structtype


@dataclass_json
@dataclass
class ResultSetMetadata:
    row_type: Optional[structtype.StructType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowType' }})
    transaction: Optional[transaction.Transaction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction' }})
    undeclared_parameters: Optional[structtype.StructType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'undeclaredParameters' }})
    
