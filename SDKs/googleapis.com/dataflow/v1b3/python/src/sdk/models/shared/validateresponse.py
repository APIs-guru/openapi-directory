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
class ValidateResponse:
    r"""ValidateResponse
    Response to the validation request.
    """
    
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    query_info: Optional[QueryInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryInfo') }})
    
