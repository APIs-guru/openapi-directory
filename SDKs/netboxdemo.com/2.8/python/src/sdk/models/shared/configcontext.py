from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import nestedclustergroup
from . import nestedcluster
from . import nestedplatform
from . import nestedregion
from . import nesteddevicerole
from . import nestedsite
from . import nestedtenantgroup
from . import nestedtenant


@dataclass_json
@dataclass
class ConfigContext:
    cluster_groups: Optional[List[nestedclustergroup.NestedClusterGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster_groups' }})
    clusters: Optional[List[nestedcluster.NestedCluster]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusters' }})
    data: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_active' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    platforms: Optional[List[nestedplatform.NestedPlatform]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platforms' }})
    regions: Optional[List[nestedregion.NestedRegion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regions' }})
    roles: Optional[List[nesteddevicerole.NestedDeviceRole]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roles' }})
    sites: Optional[List[nestedsite.NestedSite]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sites' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    tenant_groups: Optional[List[nestedtenantgroup.NestedTenantGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenant_groups' }})
    tenants: Optional[List[nestedtenant.NestedTenant]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenants' }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    
