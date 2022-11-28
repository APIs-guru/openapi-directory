from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class UserListStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    OPEN = "OPEN"
    CLOSED = "CLOSED"


@dataclass_json
@dataclass
class UserListInput:
    r"""UserListInput
    Represents an Authorized Buyers user list. Authorized Buyers can create/update/list user lists. Once a user list is created in the system, Authorized Buyers can add users to the user list using the bulk uploader API. Alternatively, users can be added by hosting a tag on the advertiser's page.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    membership_duration_days: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membershipDurationDays') }})
    url_restriction: Optional[URLRestriction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlRestriction') }})
    

@dataclass_json
@dataclass
class UserList:
    r"""UserList
    Represents an Authorized Buyers user list. Authorized Buyers can create/update/list user lists. Once a user list is created in the system, Authorized Buyers can add users to the user list using the bulk uploader API. Alternatively, users can be added by hosting a tag on the advertiser's page.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    membership_duration_days: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membershipDurationDays') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: Optional[UserListStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    url_restriction: Optional[URLRestriction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlRestriction') }})
    
