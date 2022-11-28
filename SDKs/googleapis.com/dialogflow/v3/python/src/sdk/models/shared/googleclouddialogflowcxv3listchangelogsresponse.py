from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ListChangelogsResponse:
    r"""GoogleCloudDialogflowCxV3ListChangelogsResponse
    The response message for Changelogs.ListChangelogs.
    """
    
    changelogs: Optional[List[GoogleCloudDialogflowCxV3Changelog]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changelogs') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
