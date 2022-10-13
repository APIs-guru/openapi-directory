from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class UpdateContactPhotoRequestSourcesEnum(str, Enum):
    READ_SOURCE_TYPE_UNSPECIFIED = "READ_SOURCE_TYPE_UNSPECIFIED"
    READ_SOURCE_TYPE_PROFILE = "READ_SOURCE_TYPE_PROFILE"
    READ_SOURCE_TYPE_CONTACT = "READ_SOURCE_TYPE_CONTACT"
    READ_SOURCE_TYPE_DOMAIN_CONTACT = "READ_SOURCE_TYPE_DOMAIN_CONTACT"


@dataclass_json
@dataclass
class UpdateContactPhotoRequest:
    person_fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personFields' }})
    photo_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photoBytes' }})
    sources: Optional[List[UpdateContactPhotoRequestSourcesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sources' }})
    
