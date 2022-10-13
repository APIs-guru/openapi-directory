from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import accountinfo
from . import driveoptions
from . import hangoutschatinfo
from . import hangoutschatoptions
from . import mailoptions
from . import orgunitinfo
from . import shareddriveinfo
from . import sitesurlinfo
from . import teamdriveinfo
from . import voiceoptions

class QueryCorpusEnum(str, Enum):
    CORPUS_TYPE_UNSPECIFIED = "CORPUS_TYPE_UNSPECIFIED"
    DRIVE = "DRIVE"
    MAIL = "MAIL"
    GROUPS = "GROUPS"
    HANGOUTS_CHAT = "HANGOUTS_CHAT"
    VOICE = "VOICE"

class QueryDataScopeEnum(str, Enum):
    DATA_SCOPE_UNSPECIFIED = "DATA_SCOPE_UNSPECIFIED"
    ALL_DATA = "ALL_DATA"
    HELD_DATA = "HELD_DATA"
    UNPROCESSED_DATA = "UNPROCESSED_DATA"

class QueryMethodEnum(str, Enum):
    SEARCH_METHOD_UNSPECIFIED = "SEARCH_METHOD_UNSPECIFIED"
    ACCOUNT = "ACCOUNT"
    ORG_UNIT = "ORG_UNIT"
    TEAM_DRIVE = "TEAM_DRIVE"
    ENTIRE_ORG = "ENTIRE_ORG"
    ROOM = "ROOM"
    SITES_URL = "SITES_URL"
    SHARED_DRIVE = "SHARED_DRIVE"

class QuerySearchMethodEnum(str, Enum):
    SEARCH_METHOD_UNSPECIFIED = "SEARCH_METHOD_UNSPECIFIED"
    ACCOUNT = "ACCOUNT"
    ORG_UNIT = "ORG_UNIT"
    TEAM_DRIVE = "TEAM_DRIVE"
    ENTIRE_ORG = "ENTIRE_ORG"
    ROOM = "ROOM"
    SITES_URL = "SITES_URL"
    SHARED_DRIVE = "SHARED_DRIVE"


@dataclass_json
@dataclass
class Query:
    account_info: Optional[accountinfo.AccountInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountInfo' }})
    corpus: Optional[QueryCorpusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'corpus' }})
    data_scope: Optional[QueryDataScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataScope' }})
    drive_options: Optional[driveoptions.DriveOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driveOptions' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    hangouts_chat_info: Optional[hangoutschatinfo.HangoutsChatInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hangoutsChatInfo' }})
    hangouts_chat_options: Optional[hangoutschatoptions.HangoutsChatOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hangoutsChatOptions' }})
    mail_options: Optional[mailoptions.MailOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mailOptions' }})
    method: Optional[QueryMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    org_unit_info: Optional[orgunitinfo.OrgUnitInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orgUnitInfo' }})
    search_method: Optional[QuerySearchMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchMethod' }})
    shared_drive_info: Optional[shareddriveinfo.SharedDriveInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sharedDriveInfo' }})
    sites_url_info: Optional[sitesurlinfo.SitesURLInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sitesUrlInfo' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    team_drive_info: Optional[teamdriveinfo.TeamDriveInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamDriveInfo' }})
    terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'terms' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    voice_options: Optional[voiceoptions.VoiceOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voiceOptions' }})
    
