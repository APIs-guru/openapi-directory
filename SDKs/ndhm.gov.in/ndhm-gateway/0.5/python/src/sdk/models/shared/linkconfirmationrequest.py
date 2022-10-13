from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LinkConfirmationRequestConfirmation:
    link_ref_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkRefNumber' }})
    token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    

@dataclass_json
@dataclass
class LinkConfirmationRequest:
    confirmation: LinkConfirmationRequestConfirmation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confirmation' }})
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
