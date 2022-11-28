from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ManifestsListResponse:
    r"""ManifestsListResponse
    A response containing a partial list of manifests and a page token used to build the next request if the request has been truncated.
    """
    
    manifests: Optional[List[Manifest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manifests') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
