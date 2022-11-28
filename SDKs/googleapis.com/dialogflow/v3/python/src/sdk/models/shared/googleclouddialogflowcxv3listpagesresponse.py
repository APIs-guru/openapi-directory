from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ListPagesResponse:
    r"""GoogleCloudDialogflowCxV3ListPagesResponse
    The response message for Pages.ListPages.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    pages: Optional[List[GoogleCloudDialogflowCxV3Page]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    
