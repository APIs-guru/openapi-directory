from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tenantresource


@dataclass_json
@dataclass
class TenancyUnit:
    consumer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumer' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    tenant_resources: Optional[List[tenantresource.TenantResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenantResources' }})
    
