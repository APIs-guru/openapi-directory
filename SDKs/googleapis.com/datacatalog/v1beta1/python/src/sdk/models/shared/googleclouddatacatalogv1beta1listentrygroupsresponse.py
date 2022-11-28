from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse:
    r"""GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse
    Response message for ListEntryGroups.
    """
    
    entry_groups: Optional[List[GoogleCloudDatacatalogV1beta1EntryGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryGroups') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
