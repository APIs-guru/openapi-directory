from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MembershipInput:
    r"""MembershipInput
    A person's membership in a group. Only contact group memberships can be modified.
    """
    
    contact_group_membership: Optional[ContactGroupMembershipInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactGroupMembership') }})
    domain_membership: Optional[DomainMembership] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainMembership') }})
    metadata: Optional[FieldMetadataInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    

@dataclass_json
@dataclass
class Membership:
    r"""Membership
    A person's membership in a group. Only contact group memberships can be modified.
    """
    
    contact_group_membership: Optional[ContactGroupMembership] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactGroupMembership') }})
    domain_membership: Optional[DomainMembership] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainMembership') }})
    metadata: Optional[FieldMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    
