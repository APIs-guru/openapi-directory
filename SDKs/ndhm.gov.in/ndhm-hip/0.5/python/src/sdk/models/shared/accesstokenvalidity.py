from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccessTokenValidity:
    expiry: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiry'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    limit: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    purpose: PatientAuthPurposeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('purpose') }})
    requester: PatientAuthRequester = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requester') }})
    
