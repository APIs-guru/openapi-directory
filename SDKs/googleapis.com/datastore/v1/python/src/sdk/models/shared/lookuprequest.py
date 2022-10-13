from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import key
from . import readoptions


@dataclass_json
@dataclass
class LookupRequest:
    database_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databaseId' }})
    keys: Optional[List[key.Key]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keys' }})
    read_options: Optional[readoptions.ReadOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readOptions' }})
    
