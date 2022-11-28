from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ListZonesResponse:
    r"""GoogleCloudDataplexV1ListZonesResponse
    List zones response.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    zones: Optional[List[GoogleCloudDataplexV1Zone]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zones') }})
    
