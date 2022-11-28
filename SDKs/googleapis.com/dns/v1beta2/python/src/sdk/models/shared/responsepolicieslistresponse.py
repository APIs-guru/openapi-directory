from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResponsePoliciesListResponse:
    header: Optional[ResponseHeader] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    response_policies: Optional[List[ResponsePolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responsePolicies') }})
    
