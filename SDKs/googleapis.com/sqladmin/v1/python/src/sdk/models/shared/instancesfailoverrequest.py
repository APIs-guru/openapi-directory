from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import failovercontext


@dataclass_json
@dataclass
class InstancesFailoverRequest:
    failover_context: Optional[failovercontext.FailoverContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failoverContext' }})
    
