from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class InternalRangeOverlapsEnum(str, Enum):
    OVERLAP_UNSPECIFIED = "OVERLAP_UNSPECIFIED"
    OVERLAP_ROUTE_RANGE = "OVERLAP_ROUTE_RANGE"

class InternalRangePeeringEnum(str, Enum):
    PEERING_UNSPECIFIED = "PEERING_UNSPECIFIED"
    FOR_SELF = "FOR_SELF"
    FOR_PEER = "FOR_PEER"
    NOT_SHARED = "NOT_SHARED"

class InternalRangeUsageEnum(str, Enum):
    USAGE_UNSPECIFIED = "USAGE_UNSPECIFIED"
    FOR_VPC = "FOR_VPC"
    EXTERNAL_TO_VPC = "EXTERNAL_TO_VPC"


@dataclass_json
@dataclass
class InternalRangeInput:
    r"""InternalRangeInput
    The InternalRange resource for IPAM operations within a VPC network. Used to represent a private address range along with behavioral characterstics of that range (it's usage and peering behavior). Networking resources can link to this range if they are created as belonging to it. Next id: 14
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    ip_cidr_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipCidrRange') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    overlaps: Optional[List[InternalRangeOverlapsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overlaps') }})
    peering: Optional[InternalRangePeeringEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('peering') }})
    prefix_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefixLength') }})
    target_cidr_range: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetCidrRange') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    usage: Optional[InternalRangeUsageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage') }})
    

@dataclass_json
@dataclass
class InternalRange:
    r"""InternalRange
    The InternalRange resource for IPAM operations within a VPC network. Used to represent a private address range along with behavioral characterstics of that range (it's usage and peering behavior). Networking resources can link to this range if they are created as belonging to it. Next id: 14
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    ip_cidr_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipCidrRange') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    overlaps: Optional[List[InternalRangeOverlapsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overlaps') }})
    peering: Optional[InternalRangePeeringEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('peering') }})
    prefix_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefixLength') }})
    target_cidr_range: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetCidrRange') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    usage: Optional[InternalRangeUsageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage') }})
    users: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    
