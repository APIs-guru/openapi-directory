from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConfigManagementGitConfig:
    gcp_service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcpServiceAccountEmail' }})
    https_proxy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpsProxy' }})
    policy_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyDir' }})
    secret_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secretType' }})
    sync_branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syncBranch' }})
    sync_repo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syncRepo' }})
    sync_rev: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syncRev' }})
    sync_wait_secs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syncWaitSecs' }})
    
