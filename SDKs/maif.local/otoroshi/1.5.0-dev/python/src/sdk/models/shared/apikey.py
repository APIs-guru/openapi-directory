from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIKey:
    authorized_entities: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizedEntities' }})
    client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    client_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientName' }})
    client_secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientSecret' }})
    daily_quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dailyQuota' }})
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    monthly_quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monthlyQuota' }})
    throttling_quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'throttlingQuota' }})
    
