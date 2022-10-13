from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import session


@dataclass_json
@dataclass
class BatchCreateSessionsResponse:
    session: Optional[List[session.Session]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'session' }})
    
