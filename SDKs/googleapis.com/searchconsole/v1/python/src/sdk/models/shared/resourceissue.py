from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourceIssue:
    r"""ResourceIssue
    Information about a resource with issue.
    """
    
    blocked_resource: Optional[BlockedResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockedResource') }})
    
