from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import obaccount6
from . import links
from . import meta


@dataclass_json
@dataclass
class ObReadAccount6Data:
    account: Optional[List[obaccount6.ObAccount6]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Account' }})
    

@dataclass_json
@dataclass
class ObReadAccount6:
    data: ObReadAccount6Data = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    links: Optional[links.Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Links' }})
    meta: Optional[meta.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Meta' }})
    
