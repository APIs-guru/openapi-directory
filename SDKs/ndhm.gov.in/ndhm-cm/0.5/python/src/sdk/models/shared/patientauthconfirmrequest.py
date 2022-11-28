from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PatientAuthConfirmRequestCredential:
    r"""PatientAuthConfirmRequestCredential
    note, demographic details are only required for demographic verfication.
    """
    
    auth_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authCode') }})
    demographic: Optional[PatientDemographic] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('demographic') }})
    

@dataclass_json
@dataclass
class PatientAuthConfirmRequest:
    credential: PatientAuthConfirmRequestCredential = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('credential') }})
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transaction_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionId') }})
    
