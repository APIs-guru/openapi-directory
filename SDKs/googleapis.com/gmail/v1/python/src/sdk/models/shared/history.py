from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class History:
    r"""History
    A record of a change to the user's mailbox. Each history change may affect multiple messages in multiple ways.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels_added: Optional[List[HistoryLabelAdded]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelsAdded') }})
    labels_removed: Optional[List[HistoryLabelRemoved]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelsRemoved') }})
    messages: Optional[List[Message]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    messages_added: Optional[List[HistoryMessageAdded]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messagesAdded') }})
    messages_deleted: Optional[List[HistoryMessageDeleted]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messagesDeleted') }})
    
