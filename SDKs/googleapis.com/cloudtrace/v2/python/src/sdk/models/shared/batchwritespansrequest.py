from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import span


@dataclass_json
@dataclass
class BatchWriteSpansRequest:
    spans: Optional[List[span.Span]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spans' }})
    
