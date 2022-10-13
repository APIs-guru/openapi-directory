from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentFollowupIntentInfo:
    followup_intent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followupIntentName' }})
    parent_followup_intent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentFollowupIntentName' }})
    
