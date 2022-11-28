from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkflowTemplatePlacementInput:
    r"""WorkflowTemplatePlacementInput
    Specifies workflow execution target.Either managed_cluster or cluster_selector is required.
    """
    
    cluster_selector: Optional[ClusterSelector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterSelector') }})
    managed_cluster: Optional[ManagedClusterInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedCluster') }})
    

@dataclass_json
@dataclass
class WorkflowTemplatePlacement:
    r"""WorkflowTemplatePlacement
    Specifies workflow execution target.Either managed_cluster or cluster_selector is required.
    """
    
    cluster_selector: Optional[ClusterSelector] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterSelector') }})
    managed_cluster: Optional[ManagedCluster] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedCluster') }})
    
