from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MarketingEventExternalUniqueIdentifier:
    app_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    external_account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalAccountId') }})
    external_event_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalEventId') }})
    
