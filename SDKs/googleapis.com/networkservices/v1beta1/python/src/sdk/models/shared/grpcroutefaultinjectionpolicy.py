from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import grpcroutefaultinjectionpolicyabort
from . import grpcroutefaultinjectionpolicydelay


@dataclass_json
@dataclass
class GrpcRouteFaultInjectionPolicy:
    abort: Optional[grpcroutefaultinjectionpolicyabort.GrpcRouteFaultInjectionPolicyAbort] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abort' }})
    delay: Optional[grpcroutefaultinjectionpolicydelay.GrpcRouteFaultInjectionPolicyDelay] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delay' }})
    
