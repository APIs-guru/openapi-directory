from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WorkloadIdentityConfig:
    r"""WorkloadIdentityConfig
    Configuration for the use of Kubernetes Service Accounts in GCP IAM policies.
    """
    
    workload_pool: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloadPool') }})
    
