from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2intent


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2BatchDeleteIntentsRequest:
    intents: Optional[List[googleclouddialogflowv2intent.GoogleCloudDialogflowV2Intent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intents' }})
    
