from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import profilemetadata

class SourceTypeEnum(str, Enum):
    SOURCE_TYPE_UNSPECIFIED = "SOURCE_TYPE_UNSPECIFIED"
    ACCOUNT = "ACCOUNT"
    PROFILE = "PROFILE"
    DOMAIN_PROFILE = "DOMAIN_PROFILE"
    CONTACT = "CONTACT"
    OTHER_CONTACT = "OTHER_CONTACT"
    DOMAIN_CONTACT = "DOMAIN_CONTACT"


@dataclass_json
@dataclass
class Source:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    profile_metadata: Optional[profilemetadata.ProfileMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileMetadata' }})
    type: Optional[SourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
