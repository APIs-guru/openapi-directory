from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ExportOptionsRegionEnum(str, Enum):
    EXPORT_REGION_UNSPECIFIED = "EXPORT_REGION_UNSPECIFIED"
    ANY = "ANY"
    US = "US"
    EUROPE = "EUROPE"


@dataclass_json
@dataclass
class ExportOptions:
    r"""ExportOptions
    Additional options for exports
    """
    
    drive_options: Optional[DriveExportOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveOptions') }})
    groups_options: Optional[GroupsExportOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupsOptions') }})
    hangouts_chat_options: Optional[HangoutsChatExportOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hangoutsChatOptions') }})
    mail_options: Optional[MailExportOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mailOptions') }})
    region: Optional[ExportOptionsRegionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    voice_options: Optional[VoiceExportOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voiceOptions') }})
    
