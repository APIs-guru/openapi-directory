from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LinkConfirmationRequestConfirmation:
    link_ref_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkRefNumber') }})
    token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    

@dataclass_json
@dataclass
class LinkConfirmationRequest:
    confirmation: LinkConfirmationRequestConfirmation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmation') }})
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
