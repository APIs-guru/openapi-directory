from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DatafeedsCustomBatchRequestEntry:
    r"""DatafeedsCustomBatchRequestEntry
    A batch entry encoding a single non-batch datafeeds request.
    """
    
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchId') }})
    datafeed: Optional[Datafeed] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datafeed') }})
    datafeed_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datafeedId') }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantId') }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    
