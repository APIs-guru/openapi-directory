from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Query
    The query definition used for search and export.
    """
    
    account_info: Optional[AccountInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountInfo') }})
    corpus: Optional[QueryCorpusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('corpus') }})
    data_scope: Optional[QueryDataScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataScope') }})
    drive_options: Optional[DriveOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveOptions') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    hangouts_chat_info: Optional[HangoutsChatInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hangoutsChatInfo') }})
    hangouts_chat_options: Optional[HangoutsChatOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hangoutsChatOptions') }})
    mail_options: Optional[MailOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mailOptions') }})
    method: Optional[QueryMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    org_unit_info: Optional[OrgUnitInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgUnitInfo') }})
    search_method: Optional[QuerySearchMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchMethod') }})
    shared_drive_info: Optional[SharedDriveInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharedDriveInfo') }})
    sites_url_info: Optional[SitesURLInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sitesUrlInfo') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    team_drive_info: Optional[TeamDriveInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teamDriveInfo') }})
    terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terms') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    voice_options: Optional[VoiceOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voiceOptions') }})
    
