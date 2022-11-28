from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PatientDemographic:
    r"""PatientDemographic
    Demographic details must be same as registered
    """
    
    date_of_birth: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateOfBirth') }})
    gender: PatientGenderEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    identifier: Optional[AuthConfirmIdentifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    
