from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConfigManagementOciConfig:
    gcp_service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcpServiceAccountEmail' }})
    policy_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyDir' }})
    secret_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secretType' }})
    sync_repo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syncRepo' }})
    sync_wait_secs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syncWaitSecs' }})
    
