from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PubsubMessage:
    r"""PubsubMessage
    A message data and its attributes. The message payload must not be empty; it must contain either a non-empty data field, or at least one attribute.
    """
    
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageId') }})
    publish_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishTime') }})
    
