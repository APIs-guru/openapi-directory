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
class BatchUpdatePresentationResponse:
    r"""BatchUpdatePresentationResponse
    Response message from a batch update.
    """
    
    presentation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('presentationId') }})
    replies: Optional[List[Response]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replies') }})
    write_control: Optional[WriteControl] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeControl') }})
    
