from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListCollectionStatusesResponse:
    r"""ListCollectionStatusesResponse
    Response message for the ListCollectionStatuses method.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    resources: Optional[List[CollectionStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    
