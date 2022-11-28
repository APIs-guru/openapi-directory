from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ValidateCreateMembershipResponse:
    r"""ValidateCreateMembershipResponse
    Response message for the `GkeHub.ValidateCreateMembership` method.
    """
    
    validation_results: Optional[List[ValidationResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationResults') }})
    
