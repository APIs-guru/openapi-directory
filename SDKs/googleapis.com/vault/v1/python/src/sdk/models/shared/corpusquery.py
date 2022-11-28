from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CorpusQuery:
    r"""CorpusQuery
    Service-specific options for holds.
    """
    
    drive_query: Optional[HeldDriveQuery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveQuery') }})
    groups_query: Optional[HeldGroupsQuery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupsQuery') }})
    hangouts_chat_query: Optional[HeldHangoutsChatQuery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hangoutsChatQuery') }})
    mail_query: Optional[HeldMailQuery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mailQuery') }})
    voice_query: Optional[HeldVoiceQuery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voiceQuery') }})
    
