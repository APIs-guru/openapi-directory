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
class BatchUpdateContactsResponse:
    r"""BatchUpdateContactsResponse
    If not successful, returns BatchUpdateContactsErrorDetails, a list of errors corresponding to each contact. The response to a request to update a batch of contacts.
    """
    
    update_result: Optional[dict[str, PersonResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateResult') }})
    
