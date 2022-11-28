from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AuthorizationPolicyActionEnum(str, Enum):
    ACTION_UNSPECIFIED = "ACTION_UNSPECIFIED"
    ALLOW = "ALLOW"
    DENY = "DENY"


@dataclass_json
@dataclass
class AuthorizationPolicyInput:
    r"""AuthorizationPolicyInput
    AuthorizationPolicy is a resource that specifies how a server should authorize incoming connections. This resource in itself does not change the configuration unless it's attached to a target https proxy or endpoint config selector resource.
    """
    
    action: Optional[AuthorizationPolicyActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rules: Optional[List[Rule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    

@dataclass_json
@dataclass
class AuthorizationPolicy:
    r"""AuthorizationPolicy
    AuthorizationPolicy is a resource that specifies how a server should authorize incoming connections. This resource in itself does not change the configuration unless it's attached to a target https proxy or endpoint config selector resource.
    """
    
    action: Optional[AuthorizationPolicyActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rules: Optional[List[Rule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
