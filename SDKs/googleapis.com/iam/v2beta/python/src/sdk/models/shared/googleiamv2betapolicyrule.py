from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleIamV2betaPolicyRule:
    r"""GoogleIamV2betaPolicyRule
    A single rule in a `Policy`.
    """
    
    deny_rule: Optional[GoogleIamV2betaDenyRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('denyRule') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
