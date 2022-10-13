from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import collectionperiod
from . import key
from . import metric


@dataclass_json
@dataclass
class Record:
    collection_period: Optional[collectionperiod.CollectionPeriod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectionPeriod' }})
    key: Optional[key.Key] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    metrics: Optional[dict[str, metric.Metric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    
