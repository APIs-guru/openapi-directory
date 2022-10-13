from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ObjectConditions:
    exclude_prefixes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludePrefixes' }})
    include_prefixes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includePrefixes' }})
    last_modified_before: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedBefore' }})
    last_modified_since: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedSince' }})
    max_time_elapsed_since_last_modification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxTimeElapsedSinceLastModification' }})
    min_time_elapsed_since_last_modification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minTimeElapsedSinceLastModification' }})
    
