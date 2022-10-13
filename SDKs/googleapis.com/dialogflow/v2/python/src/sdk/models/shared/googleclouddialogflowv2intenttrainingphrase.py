from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2intenttrainingphrasepart

class GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    EXAMPLE = "EXAMPLE"
    TEMPLATE = "TEMPLATE"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2IntentTrainingPhrase:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parts: Optional[List[googleclouddialogflowv2intenttrainingphrasepart.GoogleCloudDialogflowV2IntentTrainingPhrasePart]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parts' }})
    times_added_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timesAddedCount' }})
    type: Optional[GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
