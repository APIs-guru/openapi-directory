from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LiveChatMessage:
    r"""LiveChatMessage
    A *liveChatMessage* resource represents a chat message in a YouTube Live Chat.
    """
    
    author_details: Optional[LiveChatMessageAuthorDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorDetails') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    snippet: Optional[LiveChatMessageSnippet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippet') }})
    
