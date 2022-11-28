from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ClusterConfigurationClustering:
    max_quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_quantity') }})
    min_quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('min_quantity') }})
    num_clusters: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_clusters') }})
    
