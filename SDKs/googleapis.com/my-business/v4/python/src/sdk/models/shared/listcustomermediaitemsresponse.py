from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListCustomerMediaItemsResponse:
    r"""ListCustomerMediaItemsResponse
    Response message for Media.ListCustomerMediaItems.
    """
    
    media_items: Optional[List[MediaItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaItems') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    total_media_item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalMediaItemCount') }})
    
