from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import demotemastercontext


@dataclass_json
@dataclass
class InstancesDemoteMasterRequest:
    demote_master_context: Optional[demotemastercontext.DemoteMasterContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'demoteMasterContext' }})
    
