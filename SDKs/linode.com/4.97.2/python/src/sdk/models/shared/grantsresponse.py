from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GrantsResponseGlobalAccountAccessEnum(str, Enum):
    READ_ONLY = "read_only"
    READ_WRITE = "read_write"


@dataclass_json
@dataclass
class GrantsResponseGlobal:
    r"""GrantsResponseGlobal
    A structure containing the Account-level grants a User has.
    
    """
    
    account_access: Optional[GrantsResponseGlobalAccountAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_access') }})
    add_domains: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_domains') }})
    add_images: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_images') }})
    add_linodes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_linodes') }})
    add_longview: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_longview') }})
    add_nodebalancers: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_nodebalancers') }})
    add_stackscripts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_stackscripts') }})
    add_volumes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_volumes') }})
    cancel_account: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancel_account') }})
    longview_subscription: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longview_subscription') }})
    

@dataclass_json
@dataclass
class GrantsResponse:
    r"""GrantsResponse
    A structure representing all grants a restricted User has on the Account. Not available for unrestricted users, as they have access to everything without grants. If retrieved from the `/profile/grants` endpoint, entities to which a User has no access will be omitted.
    
    """
    
    domain: Optional[List[Grant]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    global_: Optional[GrantsResponseGlobal] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('global') }})
    image: Optional[List[Grant]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    linode: Optional[List[Grant]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linode') }})
    longview: Optional[List[Grant]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longview') }})
    nodebalancer: Optional[List[Grant]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodebalancer') }})
    stackscript: Optional[List[Grant]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stackscript') }})
    volume: Optional[List[Grant]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume') }})
    

@dataclass_json
@dataclass
class GrantsResponseInput:
    r"""GrantsResponseInput
    A structure representing all grants a restricted User has on the Account. Not available for unrestricted users, as they have access to everything without grants. If retrieved from the `/profile/grants` endpoint, entities to which a User has no access will be omitted.
    
    """
    
    domain: Optional[List[GrantInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    global_: Optional[GrantsResponseGlobal] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('global') }})
    image: Optional[List[GrantInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    linode: Optional[List[GrantInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linode') }})
    longview: Optional[List[GrantInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longview') }})
    nodebalancer: Optional[List[GrantInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodebalancer') }})
    stackscript: Optional[List[GrantInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stackscript') }})
    volume: Optional[List[GrantInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume') }})
    
