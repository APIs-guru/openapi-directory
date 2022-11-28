from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MessageInput:
    r"""MessageInput
    A message in Google Chat.
    """
    
    action_response: Optional[ActionResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionResponse') }})
    argument_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('argumentText') }})
    attachment: Optional[List[AttachmentInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachment') }})
    cards: Optional[List[Card]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cards') }})
    cards_v2: Optional[List[CardWithID]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardsV2') }})
    client_assigned_message_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientAssignedMessageId') }})
    fallback_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fallbackText') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sender: Optional[UserInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sender') }})
    slash_command: Optional[SlashCommand] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slashCommand') }})
    space: Optional[SpaceInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('space') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    thread: Optional[Thread] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thread') }})
    

@dataclass_json
@dataclass
class Message:
    r"""Message
    A message in Google Chat.
    """
    
    action_response: Optional[ActionResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionResponse') }})
    annotations: Optional[List[Annotation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    argument_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('argumentText') }})
    attachment: Optional[List[Attachment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachment') }})
    cards: Optional[List[Card]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cards') }})
    cards_v2: Optional[List[CardWithID]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardsV2') }})
    client_assigned_message_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientAssignedMessageId') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    fallback_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fallbackText') }})
    last_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdateTime') }})
    matched_url: Optional[MatchedURL] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchedUrl') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    sender: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sender') }})
    slash_command: Optional[SlashCommand] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slashCommand') }})
    space: Optional[Space] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('space') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    thread: Optional[Thread] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thread') }})
    thread_reply: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threadReply') }})
    
