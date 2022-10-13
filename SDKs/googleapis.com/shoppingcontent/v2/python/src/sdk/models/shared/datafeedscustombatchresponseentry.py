from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datafeed
from . import errors


@dataclass_json
@dataclass
class DatafeedsCustomBatchResponseEntry:
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchId' }})
    datafeed: Optional[datafeed.Datafeed] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datafeed' }})
    errors: Optional[errors.Errors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
