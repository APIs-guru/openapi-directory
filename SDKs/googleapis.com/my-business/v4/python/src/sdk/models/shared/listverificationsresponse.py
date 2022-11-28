from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListVerificationsResponse:
    r"""ListVerificationsResponse
    Response message for Verifications.ListVerifications.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    verifications: Optional[List[Verification]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifications') }})
    
