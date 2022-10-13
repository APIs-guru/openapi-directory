from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NodeKubeletConfig:
    cpu_cfs_quota: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuCfsQuota' }})
    cpu_cfs_quota_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuCfsQuotaPeriod' }})
    cpu_manager_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuManagerPolicy' }})
    pod_pids_limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'podPidsLimit' }})
    
