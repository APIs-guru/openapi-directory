from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import uptimecheckconfig


@dataclass_json
@dataclass
class ListUptimeCheckConfigsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSize' }})
    uptime_check_configs: Optional[List[uptimecheckconfig.UptimeCheckConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uptimeCheckConfigs' }})
    
