from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1usagestats


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1UsageSignal:
    favorite_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'favoriteCount' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    usage_within_time_range: Optional[dict[str, googleclouddatacatalogv1usagestats.GoogleCloudDatacatalogV1UsageStats]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usageWithinTimeRange' }})
    
