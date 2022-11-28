from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NodeKubeletConfig:
    r"""NodeKubeletConfig
    Node kubelet configs.
    """
    
    cpu_cfs_quota: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuCfsQuota') }})
    cpu_cfs_quota_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuCfsQuotaPeriod') }})
    cpu_manager_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuManagerPolicy') }})
    pod_pids_limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('podPidsLimit') }})
    
