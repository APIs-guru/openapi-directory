from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConfigContext:
    data: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    cluster_groups: Optional[List[NestedClusterGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster_groups') }})
    clusters: Optional[List[NestedCluster]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusters') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_active') }})
    platforms: Optional[List[NestedPlatform]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platforms') }})
    regions: Optional[List[NestedRegion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regions') }})
    roles: Optional[List[NestedDeviceRole]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    sites: Optional[List[NestedSite]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sites') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tenant_groups: Optional[List[NestedTenantGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant_groups') }})
    tenants: Optional[List[NestedTenant]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenants') }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    
