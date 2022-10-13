from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ApplicationInfo:
    emails: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emails' }})
    instruction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instruction' }})
    uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uris' }})
    
