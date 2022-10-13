from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import managedzone
from . import managedzone


@dataclass_json
@dataclass
class OperationManagedZoneContext:
    new_value: Optional[managedzone.ManagedZone] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newValue' }})
    old_value: Optional[managedzone.ManagedZone] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oldValue' }})
    
