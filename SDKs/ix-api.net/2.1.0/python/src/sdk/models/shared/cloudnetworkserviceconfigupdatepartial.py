from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import vlanconfigdot1q
from . import vlanconfigqinq
from . import vlanconfigport


@dataclass_json
@dataclass
class CloudNetworkServiceConfigUpdatePartial:
    billing_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billing_account' }})
    cloud_vlan: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloud_vlan' }})
    connection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection' }})
    consuming_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consuming_account' }})
    contract_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contract_ref' }})
    external_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_ref' }})
    handover: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'handover' }})
    managing_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managing_account' }})
    network_feature_configs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_feature_configs' }})
    purchase_order: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchase_order' }})
    role_assignments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role_assignments' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    vlan_config: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlan_config' }})
    
