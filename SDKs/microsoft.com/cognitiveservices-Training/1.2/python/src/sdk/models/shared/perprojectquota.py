from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PerProjectQuota:
    r"""PerProjectQuota
    Represents a set of quotas for a given project
    """
    
    images: Optional[Quota] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Images') }})
    iterations: Optional[Quota] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Iterations') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectId') }})
    tags: Optional[Quota] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
