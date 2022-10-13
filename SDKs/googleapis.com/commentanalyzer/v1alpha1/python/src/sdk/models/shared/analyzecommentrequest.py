from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import textentry
from . import context
from . import attributeparameters


@dataclass_json
@dataclass
class AnalyzeCommentRequest:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    comment: Optional[textentry.TextEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    community_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'communityId' }})
    context: Optional[context.Context] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    do_not_store: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doNotStore' }})
    languages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languages' }})
    requested_attributes: Optional[dict[str, attributeparameters.AttributeParameters]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedAttributes' }})
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionId' }})
    span_annotations: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spanAnnotations' }})
    
