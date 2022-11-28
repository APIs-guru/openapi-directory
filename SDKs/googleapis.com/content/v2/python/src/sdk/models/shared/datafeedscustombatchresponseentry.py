from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DatafeedsCustomBatchResponseEntry:
    r"""DatafeedsCustomBatchResponseEntry
    A batch entry encoding a single non-batch datafeeds response.
    """
    
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchId') }})
    datafeed: Optional[Datafeed] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datafeed') }})
    errors: Optional[Errors] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
