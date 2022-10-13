from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import address
from . import billinginformation
from . import status

class AccountStateEnum(str, Enum):
    REQUESTED = "requested"
    ALLOCATED = "allocated"
    TESTING = "testing"
    PRODUCTION = "production"
    PRODUCTION_CHANGE_PENDING = "production_change_pending"
    DECOMMISSION_REQUESTED = "decommission_requested"
    DECOMMISSIONED = "decommissioned"
    ARCHIVED = "archived"
    ERROR = "error"
    OPERATOR = "operator"
    SCHEDULED = "scheduled"


@dataclass_json
@dataclass
class Account:
    address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    billing_information: Optional[billinginformation.BillingInformation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billing_information' }})
    discoverable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discoverable' }})
    external_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_ref' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    legal_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legal_name' }})
    managing_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managing_account' }})
    metro_area_network_presence: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metro_area_network_presence' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: AccountStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    status: Optional[List[status.Status]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
