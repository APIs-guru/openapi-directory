from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PullMessage:
    r"""PullMessage
    Pull Message. This proto can only be used for tasks in a queue which has PULL type. It currently exists for backwards compatibility with the App Engine Task Queue SDK. This message type maybe returned with methods list and get, when the response view is FULL.
    """
    
    payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    
