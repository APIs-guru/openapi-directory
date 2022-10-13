from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1message


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1CreateMessageRequest:
    message: Optional[googleclouddialogflowv2beta1message.GoogleCloudDialogflowV2beta1Message] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    
