from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2inputconfig


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ImportConversationDataRequest:
    input_config: Optional[googleclouddialogflowv2inputconfig.GoogleCloudDialogflowV2InputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfig' }})
    
