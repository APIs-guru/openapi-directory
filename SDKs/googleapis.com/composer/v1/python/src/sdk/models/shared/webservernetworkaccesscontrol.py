from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import allowediprange


@dataclass_json
@dataclass
class WebServerNetworkAccessControl:
    allowed_ip_ranges: Optional[List[allowediprange.AllowedIPRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedIpRanges' }})
    
