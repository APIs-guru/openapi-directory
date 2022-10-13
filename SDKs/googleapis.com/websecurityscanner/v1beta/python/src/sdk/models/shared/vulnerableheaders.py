from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import header
from . import header


@dataclass_json
@dataclass
class VulnerableHeaders:
    headers: Optional[List[header.Header]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    missing_headers: Optional[List[header.Header]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'missingHeaders' }})
    
