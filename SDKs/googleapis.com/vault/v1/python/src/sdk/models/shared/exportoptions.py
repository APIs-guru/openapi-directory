from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import driveexportoptions
from . import groupsexportoptions
from . import hangoutschatexportoptions
from . import mailexportoptions
from . import voiceexportoptions

class ExportOptionsRegionEnum(str, Enum):
    EXPORT_REGION_UNSPECIFIED = "EXPORT_REGION_UNSPECIFIED"
    ANY = "ANY"
    US = "US"
    EUROPE = "EUROPE"


@dataclass_json
@dataclass
class ExportOptions:
    drive_options: Optional[driveexportoptions.DriveExportOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driveOptions' }})
    groups_options: Optional[groupsexportoptions.GroupsExportOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupsOptions' }})
    hangouts_chat_options: Optional[hangoutschatexportoptions.HangoutsChatExportOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hangoutsChatOptions' }})
    mail_options: Optional[mailexportoptions.MailExportOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mailOptions' }})
    region: Optional[ExportOptionsRegionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    voice_options: Optional[voiceexportoptions.VoiceExportOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voiceOptions' }})
    
