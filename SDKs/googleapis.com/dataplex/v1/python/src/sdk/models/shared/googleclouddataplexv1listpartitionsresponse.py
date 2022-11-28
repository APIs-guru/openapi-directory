from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ListPartitionsResponse:
    r"""GoogleCloudDataplexV1ListPartitionsResponse
    List metadata partitions response.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    partitions: Optional[List[GoogleCloudDataplexV1Partition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partitions') }})
    
