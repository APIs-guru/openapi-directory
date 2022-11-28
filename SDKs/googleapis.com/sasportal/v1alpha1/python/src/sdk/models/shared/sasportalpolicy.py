from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SasPortalPolicy:
    r"""SasPortalPolicy
    Defines an access control policy to the resources.
    """
    
    assignments: Optional[List[SasPortalAssignment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignments') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    
