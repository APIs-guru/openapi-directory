from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import virtualmachine


@dataclass_json
@dataclass
class Resources:
    regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regions' }})
    virtual_machine: Optional[virtualmachine.VirtualMachine] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualMachine' }})
    zones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zones' }})
    
