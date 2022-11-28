from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HTTPRouteFaultInjectionPolicy:
    r"""HTTPRouteFaultInjectionPolicy
    The specification for fault injection introduced into traffic to test the resiliency of clients to destination service failure. As part of fault injection, when clients send requests to a destination, delays can be introduced by client proxy on a percentage of requests before sending those requests to the destination service. Similarly requests can be aborted by client proxy for a percentage of requests.
    """
    
    abort: Optional[HTTPRouteFaultInjectionPolicyAbort] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abort') }})
    delay: Optional[HTTPRouteFaultInjectionPolicyDelay] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delay') }})
    
