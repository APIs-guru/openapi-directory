from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HTTPRouteURLRewrite:
    r"""HTTPRouteURLRewrite
    The specification for modifying the URL of the request, prior to forwarding the request to the destination.
    """
    
    host_rewrite: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostRewrite') }})
    path_prefix_rewrite: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathPrefixRewrite') }})
    
