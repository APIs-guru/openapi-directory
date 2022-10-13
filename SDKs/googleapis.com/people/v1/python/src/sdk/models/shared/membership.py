from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import contactgroupmembership
from . import domainmembership
from . import fieldmetadata


@dataclass_json
@dataclass
class Membership:
    contact_group_membership: Optional[contactgroupmembership.ContactGroupMembership] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactGroupMembership' }})
    domain_membership: Optional[domainmembership.DomainMembership] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainMembership' }})
    metadata: Optional[fieldmetadata.FieldMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    
