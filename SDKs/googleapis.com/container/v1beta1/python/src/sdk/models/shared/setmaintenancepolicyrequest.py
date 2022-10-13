from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import maintenancepolicy


@dataclass_json
@dataclass
class SetMaintenancePolicyRequest:
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterId' }})
    maintenance_policy: Optional[maintenancepolicy.MaintenancePolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maintenancePolicy' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    
