from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import quotabucket


@dataclass_json
@dataclass
class ConsumerQuotaLimit:
    allows_admin_overrides: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowsAdminOverrides' }})
    is_precise: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPrecise' }})
    metric: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metric' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    quota_buckets: Optional[List[quotabucket.QuotaBucket]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quotaBuckets' }})
    supported_locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportedLocations' }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    
