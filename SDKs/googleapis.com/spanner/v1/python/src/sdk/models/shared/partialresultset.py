from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import resultsetmetadata
from . import resultsetstats


@dataclass_json
@dataclass
class PartialResultSet:
    chunked_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chunkedValue' }})
    metadata: Optional[resultsetmetadata.ResultSetMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    resume_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resumeToken' }})
    stats: Optional[resultsetstats.ResultSetStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    values: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
