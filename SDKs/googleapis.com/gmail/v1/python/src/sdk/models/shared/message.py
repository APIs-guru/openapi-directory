from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import messagepart


@dataclass_json
@dataclass
class Message:
    history_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'historyId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    internal_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internalDate' }})
    label_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelIds' }})
    payload: Optional[messagepart.MessagePart] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    raw: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'raw' }})
    size_estimate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeEstimate' }})
    snippet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippet' }})
    thread_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'threadId' }})
    
