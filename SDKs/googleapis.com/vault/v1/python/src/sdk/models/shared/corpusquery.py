from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import helddrivequery
from . import heldgroupsquery
from . import heldhangoutschatquery
from . import heldmailquery
from . import heldvoicequery


@dataclass_json
@dataclass
class CorpusQuery:
    drive_query: Optional[helddrivequery.HeldDriveQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driveQuery' }})
    groups_query: Optional[heldgroupsquery.HeldGroupsQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupsQuery' }})
    hangouts_chat_query: Optional[heldhangoutschatquery.HeldHangoutsChatQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hangoutsChatQuery' }})
    mail_query: Optional[heldmailquery.HeldMailQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mailQuery' }})
    voice_query: Optional[heldvoicequery.HeldVoiceQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voiceQuery' }})
    
