from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HTTPRouteRequestMirrorPolicy:
    r"""HTTPRouteRequestMirrorPolicy
    Specifies the policy on how requests are shadowed to a separate mirrored destination service. The proxy does not wait for responses from the shadow service. Prior to sending traffic to the shadow service, the host/authority header is suffixed with -shadow.
    """
    
    destination: Optional[HTTPRouteDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    
