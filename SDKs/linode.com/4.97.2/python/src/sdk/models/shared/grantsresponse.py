from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import grant
from . import grant
from . import grant
from . import grant
from . import grant
from . import grant
from . import grant

class GrantsResponseGlobalAccountAccessEnum(str, Enum):
    READ_ONLY = "read_only"
    READ_WRITE = "read_write"


@dataclass_json
@dataclass
class GrantsResponseGlobal:
    account_access: Optional[GrantsResponseGlobalAccountAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_access' }})
    add_domains: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_domains' }})
    add_images: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_images' }})
    add_linodes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_linodes' }})
    add_longview: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_longview' }})
    add_nodebalancers: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_nodebalancers' }})
    add_stackscripts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_stackscripts' }})
    add_volumes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_volumes' }})
    cancel_account: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancel_account' }})
    longview_subscription: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longview_subscription' }})
    

@dataclass_json
@dataclass
class GrantsResponse:
    domain: Optional[List[grant.Grant]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    global_: Optional[GrantsResponseGlobal] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'global' }})
    image: Optional[List[grant.Grant]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    linode: Optional[List[grant.Grant]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linode' }})
    longview: Optional[List[grant.Grant]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longview' }})
    nodebalancer: Optional[List[grant.Grant]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodebalancer' }})
    stackscript: Optional[List[grant.Grant]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stackscript' }})
    volume: Optional[List[grant.Grant]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volume' }})
    
