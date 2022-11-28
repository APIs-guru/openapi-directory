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
class SendMessageRequest:
    r"""SendMessageRequest
    Request to send a message to specified target.
    """
    
    message: Optional[Message] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    validate_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validateOnly') }})
    
