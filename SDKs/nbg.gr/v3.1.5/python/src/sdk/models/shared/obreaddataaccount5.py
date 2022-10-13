from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import obaccount6


@dataclass_json
@dataclass
class ObReadDataAccount5:
    account: Optional[List[obaccount6.ObAccount6]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Account' }})
    
