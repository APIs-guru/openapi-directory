from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum(str, Enum):
    ARCHIVE_TYPE_UNSPECIFIED = "ARCHIVE_TYPE_UNSPECIFIED"
    DEB = "DEB"
    DEB_SRC = "DEB_SRC"


@dataclass_json
@dataclass
class OsPolicyResourceRepositoryResourceAptRepository:
    archive_type: Optional[OsPolicyResourceRepositoryResourceAptRepositoryArchiveTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archiveType' }})
    components: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'components' }})
    distribution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distribution' }})
    gpg_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gpgKey' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
