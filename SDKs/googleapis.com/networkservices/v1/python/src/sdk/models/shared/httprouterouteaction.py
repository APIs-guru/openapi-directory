from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import httproutecorspolicy
from . import httproutedestination
from . import httproutefaultinjectionpolicy
from . import httprouteredirect
from . import httprouteheadermodifier
from . import httprouterequestmirrorpolicy
from . import httprouteheadermodifier
from . import httprouteretrypolicy
from . import httprouteurlrewrite


@dataclass_json
@dataclass
class HTTPRouteRouteAction:
    cors_policy: Optional[httproutecorspolicy.HTTPRouteCorsPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'corsPolicy' }})
    destinations: Optional[List[httproutedestination.HTTPRouteDestination]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinations' }})
    fault_injection_policy: Optional[httproutefaultinjectionpolicy.HTTPRouteFaultInjectionPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'faultInjectionPolicy' }})
    redirect: Optional[httprouteredirect.HTTPRouteRedirect] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect' }})
    request_header_modifier: Optional[httprouteheadermodifier.HTTPRouteHeaderModifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestHeaderModifier' }})
    request_mirror_policy: Optional[httprouterequestmirrorpolicy.HTTPRouteRequestMirrorPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestMirrorPolicy' }})
    response_header_modifier: Optional[httprouteheadermodifier.HTTPRouteHeaderModifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseHeaderModifier' }})
    retry_policy: Optional[httprouteretrypolicy.HTTPRouteRetryPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retryPolicy' }})
    timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    url_rewrite: Optional[httprouteurlrewrite.HTTPRouteURLRewrite] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlRewrite' }})
    
