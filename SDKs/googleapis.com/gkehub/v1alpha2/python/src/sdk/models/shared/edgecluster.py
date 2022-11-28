from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EdgeCluster:
    r"""EdgeCluster
    EdgeCluster contains information specific to Google Edge Clusters.
    """
    
    resource_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceLink') }})
    
