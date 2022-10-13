from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1intenttrainingphrasepart

class GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    EXAMPLE = "EXAMPLE"
    TEMPLATE = "TEMPLATE"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentTrainingPhrase:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parts: Optional[List[googleclouddialogflowv2beta1intenttrainingphrasepart.GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parts' }})
    times_added_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timesAddedCount' }})
    type: Optional[GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
