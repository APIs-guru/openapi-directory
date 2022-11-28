from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum(str, Enum):
    ARCHIVE_TYPE_UNSPECIFIED = "ARCHIVE_TYPE_UNSPECIFIED"
    DEB = "DEB"
    DEB_SRC = "DEB_SRC"


@dataclass_json
@dataclass
class OsPolicyResourceRepositoryResourceAptRepository:
    r"""OsPolicyResourceRepositoryResourceAptRepository
    Represents a single apt package repository. These will be added to a repo file that will be managed at `/etc/apt/sources.list.d/google_osconfig.list`.
    """
    
    archive_type: Optional[OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archiveType') }})
    components: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('components') }})
    distribution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distribution') }})
    gpg_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gpgKey') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
