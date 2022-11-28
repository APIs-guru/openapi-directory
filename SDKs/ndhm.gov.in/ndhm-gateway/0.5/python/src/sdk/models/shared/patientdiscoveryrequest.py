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
class PatientDiscoveryRequestPatient:
    gender: PatientGenderEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    verified_identifiers: List[Identifier] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifiedIdentifiers') }})
    year_of_birth: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('yearOfBirth') }})
    unverified_identifiers: Optional[List[Identifier]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unverifiedIdentifiers') }})
    

@dataclass_json
@dataclass
class PatientDiscoveryRequest:
    patient: PatientDiscoveryRequestPatient = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transaction_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionId') }})
    
