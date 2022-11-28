from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Principal:
    r"""Principal
    Reference to a user, group, or domain.
    """
    
    group_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupResourceName') }})
    gsuite_principal: Optional[GSuitePrincipal] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gsuitePrincipal') }})
    user_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userResourceName') }})
    
