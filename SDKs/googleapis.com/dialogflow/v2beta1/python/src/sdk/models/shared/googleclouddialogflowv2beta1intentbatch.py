from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1intent


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentBatch:
    intents: Optional[List[googleclouddialogflowv2beta1intent.GoogleCloudDialogflowV2beta1Intent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intents' }})
    
