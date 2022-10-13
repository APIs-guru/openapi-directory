from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DriveOptionsClientSideEncryptedOptionEnum(str, Enum):
    CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED = "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED"
    CLIENT_SIDE_ENCRYPTED_OPTION_ANY = "CLIENT_SIDE_ENCRYPTED_OPTION_ANY"
    CLIENT_SIDE_ENCRYPTED_OPTION_ENCRYPTED = "CLIENT_SIDE_ENCRYPTED_OPTION_ENCRYPTED"
    CLIENT_SIDE_ENCRYPTED_OPTION_UNENCRYPTED = "CLIENT_SIDE_ENCRYPTED_OPTION_UNENCRYPTED"


@dataclass_json
@dataclass
class DriveOptions:
    client_side_encrypted_option: Optional[DriveOptionsClientSideEncryptedOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientSideEncryptedOption' }})
    include_shared_drives: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeSharedDrives' }})
    include_team_drives: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeTeamDrives' }})
    version_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionDate' }})
    
