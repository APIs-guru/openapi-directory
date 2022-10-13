from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bucketoptions
from . import exemplar
from . import range


@dataclass_json
@dataclass
class Distribution:
    bucket_counts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketCounts' }})
    bucket_options: Optional[bucketoptions.BucketOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketOptions' }})
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    exemplars: Optional[List[exemplar.Exemplar]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exemplars' }})
    mean: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mean' }})
    range: Optional[range.Range] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    sum_of_squared_deviation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sumOfSquaredDeviation' }})
    
