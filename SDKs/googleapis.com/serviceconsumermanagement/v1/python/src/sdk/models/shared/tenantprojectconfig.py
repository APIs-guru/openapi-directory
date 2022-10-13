from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import billingconfig
from . import serviceaccountconfig
from . import tenantprojectpolicy


@dataclass_json
@dataclass
class TenantProjectConfig:
    billing_config: Optional[billingconfig.BillingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingConfig' }})
    folder: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folder' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    service_account_config: Optional[serviceaccountconfig.ServiceAccountConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccountConfig' }})
    services: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    tenant_project_policy: Optional[tenantprojectpolicy.TenantProjectPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenantProjectPolicy' }})
    
