from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class QuickConnectResult:
    authenticated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Authenticated' }})
    authentication: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Authentication' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    date_added: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DateAdded', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Error' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Secret' }})
    
