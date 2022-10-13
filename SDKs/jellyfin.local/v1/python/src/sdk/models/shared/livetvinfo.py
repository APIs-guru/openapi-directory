from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import livetvserviceinfo


@dataclass_json
@dataclass
class LiveTvInfo:
    enabled_users: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnabledUsers' }})
    is_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsEnabled' }})
    services: Optional[List[livetvserviceinfo.LiveTvServiceInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Services' }})
    
