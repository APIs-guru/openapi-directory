from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ImportFromURLTaskLocator:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    links: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    
