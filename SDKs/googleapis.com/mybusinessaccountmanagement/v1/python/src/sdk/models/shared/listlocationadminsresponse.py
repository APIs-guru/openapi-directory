from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListLocationAdminsResponse:
    r"""ListLocationAdminsResponse
    Response message for AccessControl.ListLocationAdmins.
    """
    
    admins: Optional[List[Admin]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('admins') }})
    
