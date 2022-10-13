from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RetryPolicy:
    maximum_backoff: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumBackoff' }})
    minimum_backoff: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumBackoff' }})
    
