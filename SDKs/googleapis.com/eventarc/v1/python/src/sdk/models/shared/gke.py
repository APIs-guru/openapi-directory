from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Gke:
    r"""Gke
    Represents a GKE destination.
    """
    
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespace') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    
