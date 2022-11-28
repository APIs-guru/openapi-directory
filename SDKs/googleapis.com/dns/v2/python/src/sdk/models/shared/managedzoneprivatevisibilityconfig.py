from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ManagedZonePrivateVisibilityConfig:
    gke_clusters: Optional[List[ManagedZonePrivateVisibilityConfigGkeCluster]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeClusters') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    networks: Optional[List[ManagedZonePrivateVisibilityConfigNetwork]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    
