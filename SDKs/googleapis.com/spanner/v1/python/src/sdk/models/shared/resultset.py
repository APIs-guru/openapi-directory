from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import resultsetmetadata
from . import resultsetstats


@dataclass_json
@dataclass
class ResultSet:
    metadata: Optional[resultsetmetadata.ResultSetMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    rows: Optional[List[List[Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    stats: Optional[resultsetstats.ResultSetStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    
