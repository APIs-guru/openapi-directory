from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Explanation:
    r"""Explanation
    Explanation about the IAM policy search result.
    """
    
    matched_permissions: Optional[dict[str, Permissions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchedPermissions') }})
    
