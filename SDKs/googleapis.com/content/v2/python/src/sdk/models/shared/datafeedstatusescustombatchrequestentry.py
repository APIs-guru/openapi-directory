from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DatafeedstatusesCustomBatchRequestEntry:
    r"""DatafeedstatusesCustomBatchRequestEntry
    A batch entry encoding a single non-batch datafeedstatuses request.
    """
    
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchId') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    datafeed_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datafeedId') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantId') }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    
