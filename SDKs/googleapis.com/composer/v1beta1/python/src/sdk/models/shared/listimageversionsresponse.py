from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListImageVersionsResponse:
    r"""ListImageVersionsResponse
    The ImageVersions in a project and location.
    """
    
    image_versions: Optional[List[ImageVersion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageVersions') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
