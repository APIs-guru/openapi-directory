from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TypeProvidersListResponse:
    r"""TypeProvidersListResponse
    A response that returns all Type Providers supported by Deployment Manager
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    type_providers: Optional[List[TypeProvider]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeProviders') }})
    
