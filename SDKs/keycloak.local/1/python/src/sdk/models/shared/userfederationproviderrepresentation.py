from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UserFederationProviderRepresentation:
    changed_sync_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changedSyncPeriod' }})
    config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    full_sync_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullSyncPeriod' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_sync: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastSync' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providerName' }})
    
