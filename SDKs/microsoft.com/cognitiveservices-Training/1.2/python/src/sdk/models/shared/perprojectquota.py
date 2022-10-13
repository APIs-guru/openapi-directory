from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import quota
from . import quota
from . import quota


@dataclass_json
@dataclass
class PerProjectQuota:
    images: Optional[quota.Quota] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Images' }})
    iterations: Optional[quota.Quota] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Iterations' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectId' }})
    tags: Optional[quota.Quota] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
