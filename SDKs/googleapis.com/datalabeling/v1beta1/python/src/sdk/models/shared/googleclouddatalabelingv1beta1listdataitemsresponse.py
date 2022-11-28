from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ListDataItemsResponse:
    r"""GoogleCloudDatalabelingV1beta1ListDataItemsResponse
    Results of listing data items in a dataset.
    """
    
    data_items: Optional[List[GoogleCloudDatalabelingV1beta1DataItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataItems') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
