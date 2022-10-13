from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3page
from . import googleclouddialogflowcxv3match


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3MatchIntentResponse:
    current_page: Optional[googleclouddialogflowcxv3page.GoogleCloudDialogflowCxV3Page] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentPage' }})
    matches: Optional[List[googleclouddialogflowcxv3match.GoogleCloudDialogflowCxV3Match]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matches' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    transcript: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transcript' }})
    trigger_event: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerEvent' }})
    trigger_intent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerIntent' }})
    
