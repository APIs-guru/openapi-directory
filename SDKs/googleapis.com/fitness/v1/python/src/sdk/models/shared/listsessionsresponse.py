from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import session
from . import session


@dataclass_json
@dataclass
class ListSessionsResponse:
    deleted_session: Optional[List[session.Session]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletedSession' }})
    has_more_data: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasMoreData' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    session: Optional[List[session.Session]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'session' }})
    
