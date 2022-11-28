from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListOrganizationsResponse:
    r"""ListOrganizationsResponse
    The response returned from the `ListOrganizations` method.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    organizations: Optional[List[Organization]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizations') }})
    
