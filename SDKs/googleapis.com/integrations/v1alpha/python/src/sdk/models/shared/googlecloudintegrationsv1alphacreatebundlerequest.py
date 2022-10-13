from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaCreateBundleRequest:
    bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bundleId' }})
    integrations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrations' }})
    secondary_customer_org_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondaryCustomerOrgId' }})
    
