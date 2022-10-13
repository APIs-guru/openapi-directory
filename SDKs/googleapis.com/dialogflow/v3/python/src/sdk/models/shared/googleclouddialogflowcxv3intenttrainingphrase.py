from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3intenttrainingphrasepart


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3IntentTrainingPhrase:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    parts: Optional[List[googleclouddialogflowcxv3intenttrainingphrasepart.GoogleCloudDialogflowCxV3IntentTrainingPhrasePart]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parts' }})
    repeat_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repeatCount' }})
    
