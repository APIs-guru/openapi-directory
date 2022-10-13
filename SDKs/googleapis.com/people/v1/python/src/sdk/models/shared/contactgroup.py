from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import groupclientdata
from . import contactgroupmetadata

class ContactGroupGroupTypeEnum(str, Enum):
    GROUP_TYPE_UNSPECIFIED = "GROUP_TYPE_UNSPECIFIED"
    USER_CONTACT_GROUP = "USER_CONTACT_GROUP"
    SYSTEM_CONTACT_GROUP = "SYSTEM_CONTACT_GROUP"


@dataclass_json
@dataclass
class ContactGroup:
    client_data: Optional[List[groupclientdata.GroupClientData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientData' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    formatted_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formattedName' }})
    group_type: Optional[ContactGroupGroupTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupType' }})
    member_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberCount' }})
    member_resource_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberResourceNames' }})
    metadata: Optional[contactgroupmetadata.ContactGroupMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceName' }})
    
