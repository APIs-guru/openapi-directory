from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1intenttrainingphrasepart


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    parts: Optional[List[googleclouddialogflowcxv3beta1intenttrainingphrasepart.GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parts' }})
    repeat_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repeatCount' }})
    
