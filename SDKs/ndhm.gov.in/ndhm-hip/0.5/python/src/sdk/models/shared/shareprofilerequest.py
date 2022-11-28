from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ShareProfileRequestPatientUserDemographics:
    gender: PatientGenderEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    health_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthId') }})
    health_id_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthIdNumber') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    year_of_birth: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('yearOfBirth') }})
    address: Optional[PatientAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    day_of_birth: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayOfBirth') }})
    identifiers: Optional[List[Identifier]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifiers') }})
    month_of_birth: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthOfBirth') }})
    

@dataclass_json
@dataclass
class ShareProfileRequestPatient:
    user_demographics: ShareProfileRequestPatientUserDemographics = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userDemographics') }})
    hip_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hipCode') }})
    

@dataclass_json
@dataclass
class ShareProfileRequest:
    patient: ShareProfileRequestPatient = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
