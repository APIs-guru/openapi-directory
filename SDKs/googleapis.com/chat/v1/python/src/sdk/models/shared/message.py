from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import actionresponse
from . import annotation
from . import attachment
from . import card
from . import cardwithid
from . import matchedurl
from . import user
from . import slashcommand
from . import space
from . import thread


@dataclass_json
@dataclass
class Message:
    action_response: Optional[actionresponse.ActionResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionResponse' }})
    annotations: Optional[List[annotation.Annotation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    argument_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'argumentText' }})
    attachment: Optional[List[attachment.Attachment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachment' }})
    cards: Optional[List[card.Card]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cards' }})
    cards_v2: Optional[List[cardwithid.CardWithID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cardsV2' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    fallback_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fallbackText' }})
    last_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateTime' }})
    matched_url: Optional[matchedurl.MatchedURL] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchedUrl' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    sender: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sender' }})
    slash_command: Optional[slashcommand.SlashCommand] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slashCommand' }})
    space: Optional[space.Space] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'space' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    thread: Optional[thread.Thread] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thread' }})
    
