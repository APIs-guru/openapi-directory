from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GkeNodePoolConfig:
    r"""GkeNodePoolConfig
    The configuration of a GKE node pool used by a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/concepts/jobs/dataproc-gke#create-a-dataproc-on-gke-cluster).
    """
    
    autoscaling: Optional[GkeNodePoolAutoscalingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoscaling') }})
    config: Optional[GkeNodeConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    
