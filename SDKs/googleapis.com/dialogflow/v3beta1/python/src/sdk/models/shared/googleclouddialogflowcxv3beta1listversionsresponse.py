from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ListVersionsResponse:
    r"""GoogleCloudDialogflowCxV3beta1ListVersionsResponse
    The response message for Versions.ListVersions.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    versions: Optional[List[GoogleCloudDialogflowCxV3beta1Version]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versions') }})
    
