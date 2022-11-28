from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListTenantsResponse:
    r"""ListTenantsResponse
    The List tenants response object.
    """
    
    metadata: Optional[ResponseMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    tenants: Optional[List[Tenant]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenants') }})
    
