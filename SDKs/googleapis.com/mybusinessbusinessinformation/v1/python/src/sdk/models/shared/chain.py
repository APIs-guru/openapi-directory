from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import chainname
from . import chainuri


@dataclass_json
@dataclass
class Chain:
    chain_names: Optional[List[chainname.ChainName]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chainNames' }})
    location_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationCount' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    websites: Optional[List[chainuri.ChainURI]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'websites' }})
    
