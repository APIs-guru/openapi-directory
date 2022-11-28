from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DatafeedstatusesCustomBatchResponseEntry:
    r"""DatafeedstatusesCustomBatchResponseEntry
    A batch entry encoding a single non-batch datafeedstatuses response.
    """
    
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchId') }})
    datafeed_status: Optional[DatafeedStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datafeedStatus') }})
    errors: Optional[Errors] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    
