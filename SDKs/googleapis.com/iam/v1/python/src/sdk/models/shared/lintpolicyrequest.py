from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LintPolicyRequest:
    r"""LintPolicyRequest
    The request to lint a Cloud IAM policy object.
    """
    
    condition: Optional[Expr] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    full_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullResourceName') }})
    
