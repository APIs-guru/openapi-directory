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
class UpdateTopicRequest:
    r"""UpdateTopicRequest
    Request for the UpdateTopic method.
    """
    
    topic: Optional[Topic] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    
