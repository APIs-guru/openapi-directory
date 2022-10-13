from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudChannelV1RepricingConfigEntitlementGranularity:
    entitlement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entitlement' }})
    
