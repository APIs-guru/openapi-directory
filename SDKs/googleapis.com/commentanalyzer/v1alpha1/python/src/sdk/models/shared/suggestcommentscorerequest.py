from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attributescores
from . import textentry
from . import context


@dataclass_json
@dataclass
class SuggestCommentScoreRequest:
    attribute_scores: Optional[dict[str, attributescores.AttributeScores]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributeScores' }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    comment: Optional[textentry.TextEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    community_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'communityId' }})
    context: Optional[context.Context] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    languages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languages' }})
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionId' }})
    
