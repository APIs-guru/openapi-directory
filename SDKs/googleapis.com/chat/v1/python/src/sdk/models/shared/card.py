from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cardaction
from . import cardheader
from . import section


@dataclass_json
@dataclass
class Card:
    card_actions: Optional[List[cardaction.CardAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cardActions' }})
    header: Optional[cardheader.CardHeader] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'header' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    sections: Optional[List[section.Section]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sections' }})
    
