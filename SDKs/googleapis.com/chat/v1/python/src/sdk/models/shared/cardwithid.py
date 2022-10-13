from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleappscardv1card


@dataclass_json
@dataclass
class CardWithID:
    card: Optional[googleappscardv1card.GoogleAppsCardV1Card] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card' }})
    card_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cardId' }})
    
