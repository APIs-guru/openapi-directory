from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class JwtLocation:
    cookie: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookie' }})
    header: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'header' }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    value_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valuePrefix' }})
    
