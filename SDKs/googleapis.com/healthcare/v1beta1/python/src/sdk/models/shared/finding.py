from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Finding:
    end: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    info_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infoType' }})
    quote: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quote' }})
    start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    
