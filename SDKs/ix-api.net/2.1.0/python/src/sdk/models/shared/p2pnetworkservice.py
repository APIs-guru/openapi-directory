from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import status

class P2PNetworkServiceStateEnum(str, Enum):
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
class P2PNetworkService:
    billing_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billing_account' }})
    capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacity' }})
    charged_until: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'charged_until', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    consuming_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consuming_account' }})
    contract_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contract_ref' }})
    decommission_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decommission_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    external_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_ref' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    joining_member_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'joining_member_account' }})
    managing_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managing_account' }})
    nsc_required_contact_roles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nsc_required_contact_roles' }})
    product_offering: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_offering' }})
    purchase_order: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchase_order' }})
    state: P2PNetworkServiceStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    status: Optional[List[status.Status]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
