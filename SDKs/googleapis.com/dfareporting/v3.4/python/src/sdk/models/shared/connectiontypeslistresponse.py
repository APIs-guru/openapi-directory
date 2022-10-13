from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import connectiontype


@dataclass_json
@dataclass
class ConnectionTypesListResponse:
    connection_types: Optional[List[connectiontype.ConnectionType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionTypes' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
