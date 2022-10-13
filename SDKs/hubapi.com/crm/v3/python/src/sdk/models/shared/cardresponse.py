from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import cardactions
from . import carddisplaybody
from . import cardfetchbody


@dataclass_json
@dataclass
class CardResponse:
    actions: cardactions.CardActions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display: carddisplaybody.CardDisplayBody = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display' }})
    fetch: cardfetchbody.CardFetchBody = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fetch' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
