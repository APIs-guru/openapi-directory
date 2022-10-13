from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import apikeyout


@dataclass_json
@dataclass
class APICounterV2Out:
    api_key: Optional[apikeyout.APIKeyOut] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKey' }})
    api_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiService' }})
    created_date_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdDateTime' }})
    last_flushed_date_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastFlushedDateTime' }})
    last_used_date_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUsedDateTime' }})
    service_features_usage: Optional[dict[str, int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceFeaturesUsage' }})
    total_usage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalUsage' }})
    
