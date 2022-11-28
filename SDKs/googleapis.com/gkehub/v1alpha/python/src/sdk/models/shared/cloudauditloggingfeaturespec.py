from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CloudAuditLoggingFeatureSpec:
    r"""CloudAuditLoggingFeatureSpec
    **Cloud Audit Logging**: Spec for Audit Logging Allowlisting.
    """
    
    allowlisted_service_accounts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowlistedServiceAccounts') }})
    
