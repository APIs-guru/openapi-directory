from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DriveOptionsClientSideEncryptedOptionEnum(str, Enum):
    CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED = "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED"
    CLIENT_SIDE_ENCRYPTED_OPTION_ANY = "CLIENT_SIDE_ENCRYPTED_OPTION_ANY"
    CLIENT_SIDE_ENCRYPTED_OPTION_ENCRYPTED = "CLIENT_SIDE_ENCRYPTED_OPTION_ENCRYPTED"
    CLIENT_SIDE_ENCRYPTED_OPTION_UNENCRYPTED = "CLIENT_SIDE_ENCRYPTED_OPTION_UNENCRYPTED"


@dataclass_json
@dataclass
class DriveOptions:
    r"""DriveOptions
    Additional options for Drive search
    """
    
    client_side_encrypted_option: Optional[DriveOptionsClientSideEncryptedOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSideEncryptedOption') }})
    include_shared_drives: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeSharedDrives') }})
    include_team_drives: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeTeamDrives') }})
    version_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionDate') }})
    
