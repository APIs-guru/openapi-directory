from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cardactions
from . import carddisplaybody
from . import cardfetchbodypatch


@dataclass_json
@dataclass
class CardPatchRequest:
    actions: Optional[cardactions.CardActions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    display: Optional[carddisplaybody.CardDisplayBody] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display' }})
    fetch: Optional[cardfetchbodypatch.CardFetchBodyPatch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fetch' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
