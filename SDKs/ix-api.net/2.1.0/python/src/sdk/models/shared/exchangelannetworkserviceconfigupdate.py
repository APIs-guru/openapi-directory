from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import vlanconfigdot1q
from . import vlanconfigqinq
from . import vlanconfigport


@dataclass_json
@dataclass
class ExchangeLanNetworkServiceConfigUpdate:
    asns: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asns' }})
    billing_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billing_account' }})
    capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacity' }})
    connection: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection' }})
    consuming_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consuming_account' }})
    contract_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contract_ref' }})
    external_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_ref' }})
    ips: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ips' }})
    listed: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listed' }})
    macs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'macs' }})
    managing_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managing_account' }})
    network_feature_configs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_feature_configs' }})
    purchase_order: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchase_order' }})
    role_assignments: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role_assignments' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    vlan_config: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlan_config' }})
    
