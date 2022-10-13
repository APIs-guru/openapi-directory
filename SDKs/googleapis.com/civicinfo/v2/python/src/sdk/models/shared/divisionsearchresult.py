from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DivisionSearchResult:
    aliases: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aliases' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    ocd_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ocdId' }})
    
