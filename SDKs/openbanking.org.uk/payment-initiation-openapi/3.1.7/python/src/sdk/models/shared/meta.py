from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Meta:
    first_available_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstAvailableDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_available_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastAvailableDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    total_pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalPages' }})
    
