from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import obtransaction6


@dataclass_json
@dataclass
class ObReadDataTransaction6:
    transaction: Optional[List[obtransaction6.ObTransaction6]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Transaction' }})
    
