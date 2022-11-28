from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class HubStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"
    UPDATING = "UPDATING"


@dataclass_json
@dataclass
class HubInput:
    r"""HubInput
    A Network Connectivity Center hub is a collection of spokes. A single hub can contain spokes from multiple regions. However, if any of a hub's spokes use the data transfer feature, the resources associated with those spokes must all reside in the same VPC network. Spokes that do not use data transfer can be associated with any VPC network in your project.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    routing_vpcs: Optional[List[RoutingVpcInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routingVpcs') }})
    

@dataclass_json
@dataclass
class Hub:
    r"""Hub
    A Network Connectivity Center hub is a collection of spokes. A single hub can contain spokes from multiple regions. However, if any of a hub's spokes use the data transfer feature, the resources associated with those spokes must all reside in the same VPC network. Spokes that do not use data transfer can be associated with any VPC network in your project.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    routing_vpcs: Optional[List[RoutingVpc]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routingVpcs') }})
    state: Optional[HubStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    unique_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uniqueId') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
