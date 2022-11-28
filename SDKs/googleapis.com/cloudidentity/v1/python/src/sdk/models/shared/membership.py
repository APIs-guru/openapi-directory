from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class MembershipTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    USER = "USER"
    SERVICE_ACCOUNT = "SERVICE_ACCOUNT"
    GROUP = "GROUP"
    SHARED_DRIVE = "SHARED_DRIVE"
    OTHER = "OTHER"


@dataclass_json
@dataclass
class MembershipInput:
    r"""MembershipInput
    A membership within the Cloud Identity Groups API. A `Membership` defines a relationship between a `Group` and an entity belonging to that `Group`, referred to as a \"member\".
    """
    
    preferred_member_key: Optional[EntityKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferredMemberKey') }})
    roles: Optional[List[MembershipRole1]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    

@dataclass_json
@dataclass
class Membership:
    r"""Membership
    A membership within the Cloud Identity Groups API. A `Membership` defines a relationship between a `Group` and an entity belonging to that `Group`, referred to as a \"member\".
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    preferred_member_key: Optional[EntityKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferredMemberKey') }})
    roles: Optional[List[MembershipRole]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    type: Optional[MembershipTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
