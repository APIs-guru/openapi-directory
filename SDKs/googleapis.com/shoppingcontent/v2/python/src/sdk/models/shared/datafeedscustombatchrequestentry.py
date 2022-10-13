from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datafeed


@dataclass_json
@dataclass
class DatafeedsCustomBatchRequestEntry:
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchId' }})
    datafeed: Optional[datafeed.Datafeed] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datafeed' }})
    datafeed_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datafeedId' }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantId' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    
