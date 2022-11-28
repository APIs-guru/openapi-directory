from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListRuntimeVersionsResponse:
    r"""ListRuntimeVersionsResponse
    Response for ListRuntimeVersions.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    runtime_versions: Optional[List[RuntimeVersion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeVersions') }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
