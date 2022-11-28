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
class PatientAuthConfirmResponseAuth:
    r"""PatientAuthConfirmResponseAuth
    depending on the purpose of auth, as specified in /auth/init, the response may include the following 
      1. LINK - only returns **accessToken**
      2. KYC - only returns **patient**
      3. KYC_AND_LINK - returns both **accessToken** and **patient**
    
    """
    
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessToken') }})
    patient: Optional[PatientDemographicResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    validity: Optional[AccessTokenValidity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validity') }})
    

@dataclass_json
@dataclass
class PatientAuthConfirmResponse:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    resp: RequestReference = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resp') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    auth: Optional[PatientAuthConfirmResponseAuth] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth') }})
    error: Optional[Error] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    
