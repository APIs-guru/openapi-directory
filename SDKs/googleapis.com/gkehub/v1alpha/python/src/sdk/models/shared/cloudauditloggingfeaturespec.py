from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CloudAuditLoggingFeatureSpec:
    allowlisted_service_accounts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowlistedServiceAccounts' }})
    
