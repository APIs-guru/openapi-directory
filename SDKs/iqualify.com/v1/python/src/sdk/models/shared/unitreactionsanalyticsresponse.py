from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import unitreactionsfeedback


@dataclass_json
@dataclass
class UnitReactionsAnalyticsResponse:
    feedback: Optional[unitreactionsfeedback.UnitReactionsFeedback] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feedback' }})
    page_id: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageId' }})
    
