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
class WriteRequest:
    r"""WriteRequest
    The request for Firestore.Write. The first request creates a stream, or resumes an existing one from a token. When creating a new stream, the server replies with a response containing only an ID and a token, to use in the next request. When resuming a stream, the server first streams any responses later than the given token, then a response containing only an up-to-date token, to use in the next request.
    """
    
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    stream_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamId') }})
    stream_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamToken') }})
    writes: Optional[List[Write]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writes') }})
    
