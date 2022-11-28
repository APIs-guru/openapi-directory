from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConfigManagementGitConfig:
    r"""ConfigManagementGitConfig
    Git repo configuration for a single cluster.
    """
    
    gcp_service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcpServiceAccountEmail') }})
    https_proxy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpsProxy') }})
    policy_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyDir') }})
    secret_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretType') }})
    sync_branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncBranch') }})
    sync_repo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncRepo') }})
    sync_rev: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncRev') }})
    sync_wait_secs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncWaitSecs') }})
    
