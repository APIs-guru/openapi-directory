from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WmxSitemapContent:
    indexed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexed' }})
    submitted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submitted' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
