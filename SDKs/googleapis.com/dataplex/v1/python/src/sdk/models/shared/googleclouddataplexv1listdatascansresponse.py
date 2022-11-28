from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ListDataScansResponse:
    r"""GoogleCloudDataplexV1ListDataScansResponse
    List dataScans response.
    """
    
    data_scans: Optional[List[GoogleCloudDataplexV1DataScan]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataScans') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
