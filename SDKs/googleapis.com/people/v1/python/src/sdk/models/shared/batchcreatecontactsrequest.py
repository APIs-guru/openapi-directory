from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import contacttocreate

class BatchCreateContactsRequestSourcesEnum(str, Enum):
    READ_SOURCE_TYPE_UNSPECIFIED = "READ_SOURCE_TYPE_UNSPECIFIED"
    READ_SOURCE_TYPE_PROFILE = "READ_SOURCE_TYPE_PROFILE"
    READ_SOURCE_TYPE_CONTACT = "READ_SOURCE_TYPE_CONTACT"
    READ_SOURCE_TYPE_DOMAIN_CONTACT = "READ_SOURCE_TYPE_DOMAIN_CONTACT"


@dataclass_json
@dataclass
class BatchCreateContactsRequest:
    contacts: Optional[List[contacttocreate.ContactToCreate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contacts' }})
    read_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readMask' }})
    sources: Optional[List[BatchCreateContactsRequestSourcesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sources' }})
    
