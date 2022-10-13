from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import quotaoverride
from . import quotaoverride
from . import quotaoverride


@dataclass_json
@dataclass
class QuotaBucket:
    admin_override: Optional[quotaoverride.QuotaOverride] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adminOverride' }})
    consumer_override: Optional[quotaoverride.QuotaOverride] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumerOverride' }})
    default_limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultLimit' }})
    dimensions: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    effective_limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveLimit' }})
    producer_override: Optional[quotaoverride.QuotaOverride] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'producerOverride' }})
    
