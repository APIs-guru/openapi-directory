from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import session


@dataclass_json
@dataclass
class BatchCreateSessionsRequest:
    session_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionCount' }})
    session_template: Optional[session.Session] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionTemplate' }})
    
