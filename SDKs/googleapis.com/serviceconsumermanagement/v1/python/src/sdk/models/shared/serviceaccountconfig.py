from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ServiceAccountConfig:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    tenant_project_roles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenantProjectRoles' }})
    
