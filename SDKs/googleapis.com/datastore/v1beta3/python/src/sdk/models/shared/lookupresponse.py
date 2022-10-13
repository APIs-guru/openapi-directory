from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import key
from . import entityresult
from . import entityresult


@dataclass_json
@dataclass
class LookupResponse:
    deferred: Optional[List[key.Key]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deferred' }})
    found: Optional[List[entityresult.EntityResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'found' }})
    missing: Optional[List[entityresult.EntityResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'missing' }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readTime' }})
    
