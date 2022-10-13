from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1beta1usagestats


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1UsageSignal:
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    usage_within_time_range: Optional[dict[str, googleclouddatacatalogv1beta1usagestats.GoogleCloudDatacatalogV1beta1UsageStats]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usageWithinTimeRange' }})
    
