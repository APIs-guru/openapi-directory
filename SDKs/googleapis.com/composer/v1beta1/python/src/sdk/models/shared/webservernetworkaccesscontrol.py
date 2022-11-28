from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WebServerNetworkAccessControl:
    r"""WebServerNetworkAccessControl
    Network-level access control policy for the Airflow web server.
    """
    
    allowed_ip_ranges: Optional[List[AllowedIPRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedIpRanges') }})
    
