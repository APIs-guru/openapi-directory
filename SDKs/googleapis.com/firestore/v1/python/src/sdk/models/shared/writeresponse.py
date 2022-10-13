from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import writeresult


@dataclass_json
@dataclass
class WriteResponse:
    commit_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitTime' }})
    stream_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamId' }})
    stream_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamToken' }})
    write_results: Optional[List[writeresult.WriteResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'writeResults' }})
    
