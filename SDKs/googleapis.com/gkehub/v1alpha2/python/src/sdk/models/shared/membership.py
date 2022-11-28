from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class MembershipInfrastructureTypeEnum(str, Enum):
    INFRASTRUCTURE_TYPE_UNSPECIFIED = "INFRASTRUCTURE_TYPE_UNSPECIFIED"
    ON_PREM = "ON_PREM"
    MULTI_CLOUD = "MULTI_CLOUD"


@dataclass_json
@dataclass
class Membership:
    r"""Membership
    Membership contains information about a member cluster.
    """
    
    authority: Optional[Authority] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authority') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    delete_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    endpoint: Optional[MembershipEndpoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    infrastructure_type: Optional[MembershipInfrastructureTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infrastructureType') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    last_connection_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastConnectionTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[MembershipState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    unique_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uniqueId') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class MembershipInput:
    r"""MembershipInput
    Membership contains information about a member cluster.
    """
    
    authority: Optional[AuthorityInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authority') }})
    endpoint: Optional[MembershipEndpointInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    infrastructure_type: Optional[MembershipInfrastructureTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infrastructureType') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    
