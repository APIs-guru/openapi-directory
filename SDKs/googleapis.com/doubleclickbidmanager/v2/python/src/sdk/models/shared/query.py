from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import querymetadata
from . import parameters
from . import queryschedule


@dataclass_json
@dataclass
class Query:
    metadata: Optional[querymetadata.QueryMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    params: Optional[parameters.Parameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'params' }})
    query_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryId' }})
    schedule: Optional[queryschedule.QuerySchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule' }})
    
