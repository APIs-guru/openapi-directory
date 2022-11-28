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
class BatchUpdateFormRequestInput:
    r"""BatchUpdateFormRequestInput
    A batch of updates to perform on a form. All the specified updates are made or none of them are.
    """
    
    include_form_in_response: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeFormInResponse') }})
    requests: Optional[List[RequestInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    write_control: Optional[WriteControl] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeControl') }})
    
