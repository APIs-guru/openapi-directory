from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Editors:
    r"""Editors
    The editors of a protected range.
    """
    
    domain_users_can_edit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainUsersCanEdit') }})
    groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    users: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    
