from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateDatabaseDdlRequest:
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationId' }})
    statements: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statements' }})
    
