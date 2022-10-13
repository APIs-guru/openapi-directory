from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1page
from . import googleclouddialogflowcxv3beta1match


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1MatchIntentResponse:
    current_page: Optional[googleclouddialogflowcxv3beta1page.GoogleCloudDialogflowCxV3beta1Page] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentPage' }})
    matches: Optional[List[googleclouddialogflowcxv3beta1match.GoogleCloudDialogflowCxV3beta1Match]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matches' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    transcript: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transcript' }})
    trigger_event: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerEvent' }})
    trigger_intent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerIntent' }})
    
