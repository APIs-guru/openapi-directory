from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3intentparameter
from . import googleclouddialogflowcxv3intenttrainingphrase


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3Intent:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    is_fallback: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isFallback' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parameters: Optional[List[googleclouddialogflowcxv3intentparameter.GoogleCloudDialogflowCxV3IntentParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    training_phrases: Optional[List[googleclouddialogflowcxv3intenttrainingphrase.GoogleCloudDialogflowCxV3IntentTrainingPhrase]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainingPhrases' }})
    
