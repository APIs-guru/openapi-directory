from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import cardactions
from . import carddisplaybody
from . import cardfetchbody


@dataclass_json
@dataclass
class CardCreateRequest:
    actions: cardactions.CardActions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    display: carddisplaybody.CardDisplayBody = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display' }})
    fetch: cardfetchbody.CardFetchBody = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fetch' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
