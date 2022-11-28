from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NodeBalancerTransfer:
    r"""NodeBalancerTransfer
    Information about the amount of transfer this NodeBalancer has had so far this month.
    
    """
    
    in_: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in') }})
    out: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('out') }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclass
class NodeBalancer:
    r"""NodeBalancer
    Linode's load balancing solution.  Can handle multiple ports, SSL termination, and any number of backends.  NodeBalancer ports are configured with NodeBalancer Configs, and each config is given one or more NodeBalancer Node that accepts traffic.  The traffic should be routed to the  NodeBalancer's ip address, the NodeBalancer will handle routing individual requests to backends.
    
    """
    
    client_conn_throttle: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_conn_throttle') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ipv4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv4') }})
    ipv6: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv6') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    transfer: Optional[NodeBalancerTransfer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transfer') }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class NodeBalancerInput:
    r"""NodeBalancerInput
    Linode's load balancing solution.  Can handle multiple ports, SSL termination, and any number of backends.  NodeBalancer ports are configured with NodeBalancer Configs, and each config is given one or more NodeBalancer Node that accepts traffic.  The traffic should be routed to the  NodeBalancer's ip address, the NodeBalancer will handle routing individual requests to backends.
    
    """
    
    client_conn_throttle: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_conn_throttle') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
