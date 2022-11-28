from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TenantProjectConfig:
    r"""TenantProjectConfig
    This structure defines a tenant project to be added to the specified tenancy unit and its initial configuration and properties. A project lien is created for the tenant project to prevent the tenant project from being deleted accidentally. The lien is deleted as part of tenant project removal.
    """
    
    billing_config: Optional[BillingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingConfig') }})
    folder: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('folder') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    service_account_config: Optional[ServiceAccountConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountConfig') }})
    services: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    tenant_project_policy: Optional[TenantProjectPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenantProjectPolicy') }})
    
