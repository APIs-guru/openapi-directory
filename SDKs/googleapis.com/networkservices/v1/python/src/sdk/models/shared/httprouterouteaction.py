from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HTTPRouteRouteAction:
    r"""HTTPRouteRouteAction
    The specifications for routing traffic and applying associated policies.
    """
    
    cors_policy: Optional[HTTPRouteCorsPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('corsPolicy') }})
    destinations: Optional[List[HTTPRouteDestination]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinations') }})
    fault_injection_policy: Optional[HTTPRouteFaultInjectionPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('faultInjectionPolicy') }})
    redirect: Optional[HTTPRouteRedirect] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect') }})
    request_header_modifier: Optional[HTTPRouteHeaderModifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestHeaderModifier') }})
    request_mirror_policy: Optional[HTTPRouteRequestMirrorPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMirrorPolicy') }})
    response_header_modifier: Optional[HTTPRouteHeaderModifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseHeaderModifier') }})
    retry_policy: Optional[HTTPRouteRetryPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryPolicy') }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    url_rewrite: Optional[HTTPRouteURLRewrite] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlRewrite') }})
    
