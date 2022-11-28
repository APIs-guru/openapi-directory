from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RetrieveImportableDomainsResponse:
    r"""RetrieveImportableDomainsResponse
    Response for the `RetrieveImportableDomains` method.
    """
    
    domains: Optional[List[Domain]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domains') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
