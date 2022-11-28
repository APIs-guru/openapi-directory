from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class HTTPRouteRedirectResponseCodeEnum(str, Enum):
    RESPONSE_CODE_UNSPECIFIED = "RESPONSE_CODE_UNSPECIFIED"
    MOVED_PERMANENTLY_DEFAULT = "MOVED_PERMANENTLY_DEFAULT"
    FOUND = "FOUND"
    SEE_OTHER = "SEE_OTHER"
    TEMPORARY_REDIRECT = "TEMPORARY_REDIRECT"
    PERMANENT_REDIRECT = "PERMANENT_REDIRECT"


@dataclass_json
@dataclass
class HTTPRouteRedirect:
    r"""HTTPRouteRedirect
    The specification for redirecting traffic.
    """
    
    host_redirect: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostRedirect') }})
    https_redirect: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpsRedirect') }})
    path_redirect: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathRedirect') }})
    port_redirect: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portRedirect') }})
    prefix_rewrite: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefixRewrite') }})
    response_code: Optional[HTTPRouteRedirectResponseCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseCode') }})
    strip_query: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stripQuery') }})
    
