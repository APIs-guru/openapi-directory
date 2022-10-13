from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import historylabeladded
from . import historylabelremoved
from . import message
from . import historymessageadded
from . import historymessagedeleted


@dataclass_json
@dataclass
class History:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels_added: Optional[List[historylabeladded.HistoryLabelAdded]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelsAdded' }})
    labels_removed: Optional[List[historylabelremoved.HistoryLabelRemoved]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelsRemoved' }})
    messages: Optional[List[message.Message]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messages' }})
    messages_added: Optional[List[historymessageadded.HistoryMessageAdded]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messagesAdded' }})
    messages_deleted: Optional[List[historymessagedeleted.HistoryMessageDeleted]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messagesDeleted' }})
    
