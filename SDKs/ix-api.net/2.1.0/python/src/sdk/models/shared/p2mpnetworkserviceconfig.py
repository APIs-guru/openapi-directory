from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import status
from . import vlanconfigdot1q
from . import vlanconfigqinq
from . import vlanconfigport

class P2MpNetworkServiceConfigRoleEnum(str, Enum):
    ROOT = "root"
    LEAF = "leaf"

class P2MpNetworkServiceConfigStateEnum(str, Enum):
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
class P2MpNetworkServiceConfig:
    billing_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billing_account' }})
    capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacity' }})
    charged_until: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'charged_until', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    connection: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection' }})
    consuming_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consuming_account' }})
    contract_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contract_ref' }})
    decommission_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decommission_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    external_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_ref' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    managing_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managing_account' }})
    network_feature_configs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_feature_configs' }})
    network_service: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_service' }})
    purchase_order: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchase_order' }})
    role: Optional[P2MpNetworkServiceConfigRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    role_assignments: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role_assignments' }})
    state: P2MpNetworkServiceConfigStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    status: Optional[List[status.Status]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    vlan_config: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlan_config' }})
    
