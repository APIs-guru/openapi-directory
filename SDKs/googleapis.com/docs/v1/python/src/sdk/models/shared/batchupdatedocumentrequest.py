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
class BatchUpdateDocumentRequest:
    r"""BatchUpdateDocumentRequest
    Request message for BatchUpdateDocument.
    """
    
    requests: Optional[List[Request]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    write_control: Optional[WriteControl] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeControl') }})
    
