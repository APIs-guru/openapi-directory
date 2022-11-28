from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Namespace:
    r"""Namespace
    Represents the information of a namespace
    """
    
    iam_policy: Optional[IamPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamPolicy') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
