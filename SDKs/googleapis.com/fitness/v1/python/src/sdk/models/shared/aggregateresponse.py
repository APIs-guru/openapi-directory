from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import aggregatebucket


@dataclass_json
@dataclass
class AggregateResponse:
    bucket: Optional[List[aggregatebucket.AggregateBucket]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucket' }})
    
