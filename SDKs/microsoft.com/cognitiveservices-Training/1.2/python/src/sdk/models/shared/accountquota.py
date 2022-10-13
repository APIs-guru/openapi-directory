from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import perprojectquota
from . import quota
from . import quota


@dataclass_json
@dataclass
class AccountQuota:
    per_project: Optional[List[perprojectquota.PerProjectQuota]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PerProject' }})
    predictions: Optional[quota.Quota] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Predictions' }})
    projects: Optional[quota.Quota] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Projects' }})
    tier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tier' }})
    
