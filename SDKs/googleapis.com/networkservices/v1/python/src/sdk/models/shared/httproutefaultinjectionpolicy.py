from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import httproutefaultinjectionpolicyabort
from . import httproutefaultinjectionpolicydelay


@dataclass_json
@dataclass
class HTTPRouteFaultInjectionPolicy:
    abort: Optional[httproutefaultinjectionpolicyabort.HTTPRouteFaultInjectionPolicyAbort] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abort' }})
    delay: Optional[httproutefaultinjectionpolicydelay.HTTPRouteFaultInjectionPolicyDelay] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delay' }})
    
