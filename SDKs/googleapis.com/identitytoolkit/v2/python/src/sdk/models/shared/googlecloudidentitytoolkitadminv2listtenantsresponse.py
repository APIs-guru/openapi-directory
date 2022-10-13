from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudidentitytoolkitadminv2tenant


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    tenants: Optional[List[googlecloudidentitytoolkitadminv2tenant.GoogleCloudIdentitytoolkitAdminV2Tenant]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenants' }})
    
