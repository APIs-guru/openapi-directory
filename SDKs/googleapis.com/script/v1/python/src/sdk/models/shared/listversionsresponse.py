from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListVersionsResponse:
    r"""ListVersionsResponse
    Response with the list of the versions for the specified script project.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    versions: Optional[List[Version]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versions') }})
    
