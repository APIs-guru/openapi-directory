from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConfigManagementOciConfig:
    r"""ConfigManagementOciConfig
    OCI repo configuration for a single cluster
    """
    
    gcp_service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcpServiceAccountEmail') }})
    policy_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyDir') }})
    secret_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretType') }})
    sync_repo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncRepo') }})
    sync_wait_secs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncWaitSecs') }})
    
