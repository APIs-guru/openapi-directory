from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Impersonation:
    r"""Impersonation
    Information about an impersonation, where an admin acts on behalf of an end user. Information about the acting admin is not currently available.
    """
    
    impersonated_user: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impersonatedUser') }})
    
