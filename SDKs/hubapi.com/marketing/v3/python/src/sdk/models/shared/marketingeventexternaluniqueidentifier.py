from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MarketingEventExternalUniqueIdentifier:
    app_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appId' }})
    external_account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalAccountId' }})
    external_event_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalEventId' }})
    
