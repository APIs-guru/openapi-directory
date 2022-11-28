from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAvailableVersionsResponse:
    r"""ListAvailableVersionsResponse
    Response message for the list available versions request.
    """
    
    available_versions: Optional[List[Version]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableVersions') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
