from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datafeedstatus
from . import errors


@dataclass_json
@dataclass
class DatafeedstatusesCustomBatchResponseEntry:
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchId' }})
    datafeed_status: Optional[datafeedstatus.DatafeedStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datafeedStatus' }})
    errors: Optional[errors.Errors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
