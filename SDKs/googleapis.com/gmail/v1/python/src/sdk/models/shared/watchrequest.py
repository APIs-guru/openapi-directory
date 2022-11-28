from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WatchRequestLabelFilterActionEnum(str, Enum):
    INCLUDE = "include"
    EXCLUDE = "exclude"


@dataclass_json
@dataclass
class WatchRequest:
    r"""WatchRequest
    Set up or update a new push notification watch on this user's mailbox.
    """
    
    label_filter_action: Optional[WatchRequestLabelFilterActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelFilterAction') }})
    label_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelIds') }})
    topic_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topicName') }})
    
