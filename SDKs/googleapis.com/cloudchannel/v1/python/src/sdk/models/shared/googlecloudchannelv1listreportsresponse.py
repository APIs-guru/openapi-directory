from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1ListReportsResponse:
    r"""GoogleCloudChannelV1ListReportsResponse
    Response message for CloudChannelReportsService.ListReports.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    reports: Optional[List[GoogleCloudChannelV1Report]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reports') }})
    
