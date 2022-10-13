from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UtcTimeResponse:
    request_reception_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestReceptionTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    response_transmission_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResponseTransmissionTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
