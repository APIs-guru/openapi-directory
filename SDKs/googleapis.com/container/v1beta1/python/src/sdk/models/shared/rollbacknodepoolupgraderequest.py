from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RollbackNodePoolUpgradeRequest:
    r"""RollbackNodePoolUpgradeRequest
    RollbackNodePoolUpgradeRequest rollbacks the previously Aborted or Failed NodePool upgrade. This will be an no-op if the last upgrade successfully completed.
    """
    
    cluster_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodePoolId') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    respect_pdb: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('respectPdb') }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    
