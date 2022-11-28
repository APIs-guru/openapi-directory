from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1ListEntriesResponse:
    r"""GoogleCloudDatacatalogV1ListEntriesResponse
    Response message for ListEntries.
    """
    
    entries: Optional[List[GoogleCloudDatacatalogV1Entry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
