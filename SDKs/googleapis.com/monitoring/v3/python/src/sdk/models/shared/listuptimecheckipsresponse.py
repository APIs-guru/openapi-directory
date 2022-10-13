from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import uptimecheckip


@dataclass_json
@dataclass
class ListUptimeCheckIpsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    uptime_check_ips: Optional[List[uptimecheckip.UptimeCheckIP]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uptimeCheckIps' }})
    
