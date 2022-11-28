from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AnalyzeCommentRequest:
    r"""AnalyzeCommentRequest
    The comment analysis request message.
    """
    
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    comment: Optional[TextEntry] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    community_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('communityId') }})
    context: Optional[Context] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    do_not_store: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doNotStore') }})
    languages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    requested_attributes: Optional[dict[str, AttributeParameters]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedAttributes') }})
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionId') }})
    span_annotations: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spanAnnotations') }})
    
