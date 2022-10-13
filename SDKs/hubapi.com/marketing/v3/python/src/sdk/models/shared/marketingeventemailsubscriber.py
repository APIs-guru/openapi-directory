from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MarketingEventEmailSubscriber:
    contact_properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactProperties' }})
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    interaction_date_time: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interactionDateTime' }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    
